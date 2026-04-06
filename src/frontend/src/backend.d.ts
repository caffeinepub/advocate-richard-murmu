import type { Principal } from "@icp-sdk/core/principal";
export interface Some<T> {
    __kind__: "Some";
    value: T;
}
export interface None {
    __kind__: "None";
}
export type Option<T> = Some<T> | None;
export interface Case {
    id: bigint;
    created: bigint;
    clientName: string;
    caseNumber: string;
    caseType: string;
    nextHearingDate: string;
    notes: string;
    courtName: string;
}
export interface backendInterface {
    addCase(caseData: Case): Promise<bigint>;
    deleteCase(id: bigint): Promise<void>;
    getAllCases(): Promise<Array<Case>>;
    getCase(id: bigint): Promise<Case>;
    updateCase(id: bigint, caseData: Case): Promise<void>;
}
