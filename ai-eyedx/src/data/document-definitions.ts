export type DocumentGroup = "Checklist" | "Proposal" | "Final";

export interface DocumentDefinition {
  id: string;
  title: string;
  description: string;
  status: "available" | "pending";
  url: string;
  category: "document";
  group: DocumentGroup;
}

export const documentDefinitions: DocumentDefinition[] = [
  { id: "checklist-1", title: "Checklist 1", description: "Research project checklist — item 1.", status: "pending", url: "", category: "document", group: "Checklist" },
  { id: "checklist-2", title: "Checklist 2", description: "Research project checklist — item 2.", status: "pending", url: "", category: "document", group: "Checklist" },
  { id: "proposal-main", title: "TAF", description: "Team Assessment Form for the research project.", status: "pending", url: "", category: "document", group: "Proposal" },
  { id: "proposal-cataract", title: "Individual Proposal — Cataract", description: "Binuri Perera's individual research proposal for the cataract severity module.", status: "pending", url: "", category: "document", group: "Proposal" },
  { id: "proposal-dme", title: "Individual Proposal — DME", description: "S.D Kahawevithana's individual proposal for DME detection and risk assessment.", status: "pending", url: "", category: "document", group: "Proposal" },
  { id: "proposal-glaucoma", title: "Individual Proposal — Glaucoma", description: "Chavindee M.A.P.'s individual proposal for glaucoma detection and risk assessment.", status: "pending", url: "", category: "document", group: "Proposal" },
  { id: "proposal-dr", title: "Individual Proposal — DR", description: "Oshan Wijekoon's individual proposal for diabetic retinopathy detection.", status: "pending", url: "", category: "document", group: "Proposal" },
  { id: "final-report", title: "Common Thesis", description: "The shared final thesis for the AI EyeDx research project.", status: "pending", url: "", category: "document", group: "Final" },
  { id: "final-cataract", title: "Individual Thesis — Cataract", description: "Binuri Perera's individual final thesis for the cataract severity module.", status: "pending", url: "", category: "document", group: "Final" },
  { id: "final-dme", title: "Individual Thesis — DME", description: "S.D Kahawevithana's individual final thesis for DME detection and risk assessment.", status: "pending", url: "", category: "document", group: "Final" },
  { id: "final-glaucoma", title: "Individual Thesis — Glaucoma", description: "Chavindee M.A.P.'s individual final thesis for glaucoma detection and risk assessment.", status: "pending", url: "", category: "document", group: "Final" },
  { id: "final-dr", title: "Individual Thesis — DR", description: "Oshan Wijekoon's individual final thesis for diabetic retinopathy detection.", status: "pending", url: "", category: "document", group: "Final" },
  { id: "research-paper", title: "Research Paper", description: "The AI EyeDx research paper for academic submission or publication.", status: "pending", url: "", category: "document", group: "Final" },
];

export function mergeDocumentDefinitions(
  savedDocuments: Array<Pick<DocumentDefinition, "id" | "status" | "url">>
): DocumentDefinition[] {
  return documentDefinitions.map((definition) => {
    const saved = savedDocuments.find((item) => item.id === definition.id);
    return {
      ...definition,
      status: saved?.status ?? definition.status,
      url: saved?.url ?? definition.url,
    };
  });
}
