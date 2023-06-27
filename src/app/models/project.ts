export interface Project {
  id: number;
  name: string;
  title: string;
  date: string;
  statusId: number;
  branchId: number;
  sapNumber: string;
  notes: string;
  filePath: string;
  services: {
    id: number;
    serviceName: string;
  }

}
