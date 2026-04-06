# Advocate Richard Murmu

## Current State
A Bengali-language lawyer profile website with:
- Header navigation
- Hero section with AI-generated portrait
- Practice areas section
- About section with AI-generated portrait
- Contact section with phone, WhatsApp, email, and addresses
- Footer

No backend logic exists. Profile photo is an AI-generated image.

## Requested Changes (Diff)

### Add
- Replace AI-generated portrait with the user-uploaded real photo (`/assets/richard-murmu-profile.png`) in HeroSection and AboutSection
- Case list manager (মামলার তালিকা ম্যানেজার): a new section/page where cases with client name, case number, next hearing date, and court can be added/edited/deleted, stored in backend
- Backend Motoko actor with CRUD operations for case management (addCase, getCases, updateCase, deleteCase)
- Quick link buttons to causelist.judiciary.gov.bd (মামলার কার্যতালিকা) and bdlaws.minlaw.gov.bd (আইনের ধারা) in a new "সহায়ক লিংক" section
- New nav link for "মামলা" section

### Modify
- HeroSection: replace portrait image path with `/assets/richard-murmu-profile.png`
- AboutSection: replace portrait image path with `/assets/richard-murmu-profile.png`
- Header: add "মামলা" nav link
- Footer: add "মামলা" nav link
- App.tsx: add CaseManagerSection and ExternalLinksSection

### Remove
- Nothing removed

## Implementation Plan
1. Update HeroSection and AboutSection to use the real uploaded photo
2. Generate Motoko backend with case management CRUD
3. Build CaseManagerSection component with add/edit/delete case functionality in Bengali
4. Build ExternalLinksSection with prominent link cards to causelist.judiciary.gov.bd and bdlaws.minlaw.gov.bd
5. Update Header and Footer with new nav links
6. Wire frontend to backend actor for persistent case storage
