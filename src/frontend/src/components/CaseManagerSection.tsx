import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Skeleton } from "@/components/ui/skeleton";
import { Textarea } from "@/components/ui/textarea";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { Calendar, Loader2, Pencil, Plus, Trash2 } from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";
import { toast } from "sonner";
import type { Case } from "../backend.d";
import { useActor } from "../hooks/useActor";

const CASE_TYPES = [
  { value: "দেওয়ানী", label: "দেওয়ানী" },
  { value: "ফৌজদারী", label: "ফৌজদারী" },
  { value: "পারিবারিক", label: "পারিবারিক" },
  { value: "ভূমি", label: "ভূমি" },
];

const EMPTY_FORM: Omit<Case, "id" | "created"> = {
  clientName: "",
  caseNumber: "",
  courtName: "",
  nextHearingDate: "",
  caseType: "দেওয়ানী",
  notes: "",
};

function isUrgent(dateStr: string): boolean {
  if (!dateStr) return false;
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const hearing = new Date(dateStr);
  hearing.setHours(0, 0, 0, 0);
  const diffMs = hearing.getTime() - today.getTime();
  const diffDays = diffMs / (1000 * 60 * 60 * 24);
  return diffDays >= 0 && diffDays <= 3;
}

function formatDate(dateStr: string): string {
  if (!dateStr) return "—";
  try {
    const d = new Date(dateStr);
    return d.toLocaleDateString("bn-BD", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  } catch {
    return dateStr;
  }
}

export default function CaseManagerSection() {
  const { actor, isFetching: actorFetching } = useActor();
  const queryClient = useQueryClient();

  const [dialogOpen, setDialogOpen] = useState(false);
  const [editingCase, setEditingCase] = useState<Case | null>(null);
  const [form, setForm] = useState<Omit<Case, "id" | "created">>(EMPTY_FORM);
  const [deleteTarget, setDeleteTarget] = useState<Case | null>(null);

  const {
    data: cases = [],
    isLoading,
    isError,
  } = useQuery<Case[]>({
    queryKey: ["cases"],
    queryFn: async () => {
      if (!actor) return [];
      return actor.getAllCases();
    },
    enabled: !!actor && !actorFetching,
  });

  const sortedCases = [...cases].sort((a, b) => {
    if (!a.nextHearingDate) return 1;
    if (!b.nextHearingDate) return -1;
    return a.nextHearingDate.localeCompare(b.nextHearingDate);
  });

  const addMutation = useMutation({
    mutationFn: async (data: Omit<Case, "id" | "created">) => {
      if (!actor) throw new Error("Actor not ready");
      return actor.addCase({ ...data, id: 0n, created: 0n });
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["cases"] });
      toast.success("মামলা যোগ করা হয়েছে");
      setDialogOpen(false);
      setForm(EMPTY_FORM);
    },
    onError: () => toast.error("মামলা যোগ করতে ব্যর্থ হয়েছে"),
  });

  const updateMutation = useMutation({
    mutationFn: async ({
      id,
      data,
    }: {
      id: bigint;
      data: Omit<Case, "id" | "created">;
    }) => {
      if (!actor) throw new Error("Actor not ready");
      return actor.updateCase(id, { ...data, id, created: 0n });
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["cases"] });
      toast.success("মামলা আপডেট করা হয়েছে");
      setDialogOpen(false);
      setEditingCase(null);
      setForm(EMPTY_FORM);
    },
    onError: () => toast.error("মামলা আপডেট করতে ব্যর্থ হয়েছে"),
  });

  const deleteMutation = useMutation({
    mutationFn: async (id: bigint) => {
      if (!actor) throw new Error("Actor not ready");
      return actor.deleteCase(id);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["cases"] });
      toast.success("মামলা মুছে ফেলা হয়েছে");
      setDeleteTarget(null);
    },
    onError: () => toast.error("মামলা মুছতে ব্যর্থ হয়েছে"),
  });

  const openAddDialog = () => {
    setEditingCase(null);
    setForm(EMPTY_FORM);
    setDialogOpen(true);
  };

  const openEditDialog = (c: Case) => {
    setEditingCase(c);
    setForm({
      clientName: c.clientName,
      caseNumber: c.caseNumber,
      courtName: c.courtName,
      nextHearingDate: c.nextHearingDate,
      caseType: c.caseType,
      notes: c.notes,
    });
    setDialogOpen(true);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (editingCase) {
      updateMutation.mutate({ id: editingCase.id, data: form });
    } else {
      addMutation.mutate(form);
    }
  };

  const isPending = addMutation.isPending || updateMutation.isPending;

  return (
    <section
      id="cases"
      className="py-20 md:py-28"
      style={{ backgroundColor: "oklch(0.965 0.005 240)" }}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div
            className="inline-block text-xs font-semibold tracking-widest uppercase px-4 py-1.5 rounded-full mb-4 font-bengali"
            style={{
              backgroundColor: "oklch(var(--gold) / 0.12)",
              color: "oklch(var(--gold-hover))",
            }}
          >
            মামলা ব্যবস্থাপনা
          </div>
          <h2
            className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold uppercase tracking-wide font-bengali"
            style={{ color: "oklch(var(--navy))" }}
          >
            মক্কেলের মামলার তালিকা
          </h2>
          <p className="mt-3 text-muted-foreground text-sm font-bengali max-w-md mx-auto">
            মামলার তারিখ, আদালত ও মক্কেলের তথ্য সহজে পরিচালনা করুন
          </p>
        </motion.div>

        {/* Add Button */}
        <motion.div
          className="flex justify-end mb-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.2 }}
        >
          <Button
            onClick={openAddDialog}
            className="gap-2 font-bengali"
            style={{
              backgroundColor: "oklch(var(--navy))",
              color: "white",
            }}
            data-ocid="cases.open_modal_button"
          >
            <Plus size={16} />
            নতুন মামলা যোগ করুন
          </Button>
        </motion.div>

        {/* Loading State */}
        {isLoading && (
          <div className="space-y-3" data-ocid="cases.loading_state">
            {[1, 2, 3].map((i) => (
              <Skeleton key={i} className="h-24 w-full rounded-xl" />
            ))}
          </div>
        )}

        {/* Error State */}
        {isError && (
          <div
            className="text-center py-16 text-destructive font-bengali"
            data-ocid="cases.error_state"
          >
            মামলার তালিকা লোড করতে ব্যর্থ হয়েছে।
          </div>
        )}

        {/* Empty State */}
        {!isLoading && !isError && sortedCases.length === 0 && (
          <motion.div
            className="text-center py-20 rounded-2xl font-bengali"
            style={{
              backgroundColor: "oklch(var(--navy) / 0.04)",
              border: "2px dashed oklch(var(--navy) / 0.15)",
            }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            data-ocid="cases.empty_state"
          >
            <Calendar
              size={40}
              className="mx-auto mb-4 opacity-30"
              style={{ color: "oklch(var(--navy))" }}
            />
            <p className="text-muted-foreground text-sm">
              কোনো মামলা যোগ করা হয়নি।
            </p>
            <p className="text-muted-foreground text-xs mt-1">
              উপরের বোতামে ক্লিক করে নতুন মামলা যোগ করুন।
            </p>
          </motion.div>
        )}

        {/* Case Cards */}
        {!isLoading && !isError && sortedCases.length > 0 && (
          <div className="space-y-4">
            {sortedCases.map((c, index) => {
              const urgent = isUrgent(c.nextHearingDate);
              const markerIndex = index + 1;
              return (
                <motion.div
                  key={c.id.toString()}
                  className="bg-card rounded-xl shadow-card overflow-hidden"
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.06 }}
                  style={{
                    border: urgent
                      ? "1.5px solid oklch(0.75 0.14 75)"
                      : "1.5px solid transparent",
                  }}
                  data-ocid={`cases.item.${markerIndex}`}
                >
                  <div className="flex flex-col sm:flex-row">
                    {/* Color sidebar */}
                    <div
                      className="sm:w-1.5 h-1.5 sm:h-auto flex-shrink-0"
                      style={{
                        backgroundColor: urgent
                          ? "oklch(0.75 0.14 75)"
                          : "oklch(var(--navy))",
                      }}
                    />

                    <div className="flex-1 p-5">
                      <div className="flex items-start justify-between gap-4">
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-2 flex-wrap mb-1">
                            <h3
                              className="font-semibold text-base font-bengali truncate"
                              style={{ color: "oklch(var(--navy))" }}
                            >
                              {c.clientName}
                            </h3>
                            <Badge
                              variant="secondary"
                              className="text-xs font-bengali"
                              style={{
                                backgroundColor: "oklch(var(--navy) / 0.08)",
                                color: "oklch(var(--navy))",
                              }}
                            >
                              {c.caseType}
                            </Badge>
                            {urgent && (
                              <Badge
                                className="text-xs font-bengali"
                                style={{
                                  backgroundColor: "oklch(0.75 0.14 75 / 0.15)",
                                  color: "oklch(0.55 0.12 75)",
                                  border: "1px solid oklch(0.75 0.14 75 / 0.4)",
                                }}
                              >
                                আসন্ন শুনানি
                              </Badge>
                            )}
                          </div>
                          <div className="grid grid-cols-1 sm:grid-cols-3 gap-x-6 gap-y-1 mt-2">
                            <div>
                              <span className="text-xs text-muted-foreground font-bengali">
                                মামলা নম্বর:{" "}
                              </span>
                              <span
                                className="text-xs font-medium font-bengali"
                                style={{ color: "oklch(var(--navy))" }}
                              >
                                {c.caseNumber || "—"}
                              </span>
                            </div>
                            <div>
                              <span className="text-xs text-muted-foreground font-bengali">
                                আদালত:{" "}
                              </span>
                              <span
                                className="text-xs font-medium font-bengali"
                                style={{ color: "oklch(var(--navy))" }}
                              >
                                {c.courtName || "—"}
                              </span>
                            </div>
                            <div className="flex items-center gap-1">
                              <Calendar
                                size={11}
                                style={{
                                  color: urgent
                                    ? "oklch(0.55 0.12 75)"
                                    : "oklch(var(--navy) / 0.5)",
                                }}
                              />
                              <span
                                className="text-xs font-medium font-bengali"
                                style={{
                                  color: urgent
                                    ? "oklch(0.55 0.12 75)"
                                    : "oklch(var(--navy))",
                                }}
                              >
                                {formatDate(c.nextHearingDate)}
                              </span>
                            </div>
                          </div>
                          {c.notes && (
                            <p className="text-xs text-muted-foreground font-bengali mt-2 line-clamp-2">
                              {c.notes}
                            </p>
                          )}
                        </div>

                        {/* Actions */}
                        <div className="flex items-center gap-2 flex-shrink-0">
                          <Button
                            variant="ghost"
                            size="icon"
                            className="h-8 w-8 hover:text-primary"
                            onClick={() => openEditDialog(c)}
                            aria-label="সম্পাদনা করুন"
                            data-ocid={`cases.edit_button.${markerIndex}`}
                          >
                            <Pencil size={15} />
                          </Button>
                          <Button
                            variant="ghost"
                            size="icon"
                            className="h-8 w-8 text-destructive hover:text-destructive"
                            onClick={() => setDeleteTarget(c)}
                            aria-label="মুছে ফেলুন"
                            data-ocid={`cases.delete_button.${markerIndex}`}
                          >
                            <Trash2 size={15} />
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        )}
      </div>

      {/* Add/Edit Dialog */}
      <Dialog
        open={dialogOpen}
        onOpenChange={(open) => {
          if (!isPending) {
            setDialogOpen(open);
            if (!open) {
              setEditingCase(null);
              setForm(EMPTY_FORM);
            }
          }
        }}
      >
        <DialogContent className="sm:max-w-lg" data-ocid="cases.dialog">
          <DialogHeader>
            <DialogTitle
              className="font-bengali"
              style={{ color: "oklch(var(--navy))" }}
            >
              {editingCase ? "মামলা সম্পাদনা করুন" : "নতুন মামলা যোগ করুন"}
            </DialogTitle>
          </DialogHeader>
          <form onSubmit={handleSubmit}>
            <div className="space-y-4 py-2">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <Label className="font-bengali text-xs">মক্কেলের নাম *</Label>
                  <Input
                    required
                    className="font-bengali text-sm"
                    placeholder="মক্কেলের নাম লিখুন"
                    value={form.clientName}
                    onChange={(e) =>
                      setForm((p) => ({ ...p, clientName: e.target.value }))
                    }
                    data-ocid="cases.input"
                  />
                </div>
                <div className="space-y-1.5">
                  <Label className="font-bengali text-xs">মামলা নম্বর *</Label>
                  <Input
                    required
                    className="font-bengali text-sm"
                    placeholder="মামলা নম্বর"
                    value={form.caseNumber}
                    onChange={(e) =>
                      setForm((p) => ({ ...p, caseNumber: e.target.value }))
                    }
                    data-ocid="cases.input"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <Label className="font-bengali text-xs">আদালতের নাম *</Label>
                  <Input
                    required
                    className="font-bengali text-sm"
                    placeholder="আদালতের নাম"
                    value={form.courtName}
                    onChange={(e) =>
                      setForm((p) => ({ ...p, courtName: e.target.value }))
                    }
                    data-ocid="cases.input"
                  />
                </div>
                <div className="space-y-1.5">
                  <Label className="font-bengali text-xs">মামলার ধরন *</Label>
                  <Select
                    value={form.caseType}
                    onValueChange={(v) =>
                      setForm((p) => ({ ...p, caseType: v }))
                    }
                  >
                    <SelectTrigger
                      className="font-bengali text-sm"
                      data-ocid="cases.select"
                    >
                      <SelectValue placeholder="ধরন বাছাই করুন" />
                    </SelectTrigger>
                    <SelectContent>
                      {CASE_TYPES.map((ct) => (
                        <SelectItem
                          key={ct.value}
                          value={ct.value}
                          className="font-bengali"
                        >
                          {ct.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="space-y-1.5">
                <Label className="font-bengali text-xs">
                  পরবর্তী শুনানির তারিখ *
                </Label>
                <Input
                  required
                  type="date"
                  className="font-bengali text-sm"
                  value={form.nextHearingDate}
                  onChange={(e) =>
                    setForm((p) => ({ ...p, nextHearingDate: e.target.value }))
                  }
                  data-ocid="cases.input"
                />
              </div>

              <div className="space-y-1.5">
                <Label className="font-bengali text-xs">নোট (ঐচ্ছিক)</Label>
                <Textarea
                  rows={3}
                  className="font-bengali text-sm resize-none"
                  placeholder="মামলা সংক্রান্ত যেকোনো নোট..."
                  value={form.notes}
                  onChange={(e) =>
                    setForm((p) => ({ ...p, notes: e.target.value }))
                  }
                  data-ocid="cases.textarea"
                />
              </div>
            </div>

            <DialogFooter className="mt-4 gap-2">
              <Button
                type="button"
                variant="outline"
                className="font-bengali"
                onClick={() => {
                  setDialogOpen(false);
                  setEditingCase(null);
                  setForm(EMPTY_FORM);
                }}
                disabled={isPending}
                data-ocid="cases.cancel_button"
              >
                বাতিল
              </Button>
              <Button
                type="submit"
                disabled={isPending}
                className="font-bengali"
                style={{
                  backgroundColor: "oklch(var(--navy))",
                  color: "white",
                }}
                data-ocid="cases.submit_button"
              >
                {isPending ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    সংরক্ষণ হচ্ছে...
                  </>
                ) : editingCase ? (
                  "আপডেট করুন"
                ) : (
                  "যোগ করুন"
                )}
              </Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>

      {/* Delete Confirmation Dialog */}
      <AlertDialog
        open={!!deleteTarget}
        onOpenChange={(open) => {
          if (!open) setDeleteTarget(null);
        }}
      >
        <AlertDialogContent data-ocid="cases.dialog">
          <AlertDialogHeader>
            <AlertDialogTitle className="font-bengali">
              মামলা মুছে ফেলবেন?
            </AlertDialogTitle>
            <AlertDialogDescription className="font-bengali">
              <strong>{deleteTarget?.clientName}</strong> এর মামলা (নং{" "}
              {deleteTarget?.caseNumber}) স্থায়ীভাবে মুছে ফেলা হবে। এই কাজটি পূর্বাবস্থায়
              ফেরানো যাবে না।
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel
              className="font-bengali"
              data-ocid="cases.cancel_button"
            >
              বাতিল
            </AlertDialogCancel>
            <AlertDialogAction
              className="bg-destructive text-destructive-foreground hover:bg-destructive/90 font-bengali"
              onClick={() =>
                deleteTarget && deleteMutation.mutate(deleteTarget.id)
              }
              disabled={deleteMutation.isPending}
              data-ocid="cases.delete_button"
            >
              {deleteMutation.isPending ? (
                <Loader2 className="mr-2 h-4 w-4 animate-spin inline" />
              ) : null}
              হ্যাঁ, মুছে ফেলুন
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </section>
  );
}
