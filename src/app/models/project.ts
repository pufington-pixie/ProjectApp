export interface Project {
  id: number;
  name: string;
  title: string;
  date: string;
  statusId: number;
  branchId: number;
  sapNumber: string;
  notes: string;
  services: {
    serviceId: number;
    serviceName: string;
  }

}
