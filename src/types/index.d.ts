export interface Candidate {
  id: string;
  name: string;
  phone: string;
  email: string;
  address: string;
  status: 'registered' | 'pending' | 'delivered';
  date: string;
  profileImage?: string;
}

export interface SidebarItem {
  id: string;
  label: string;
  icon?: string;
  active?: boolean;
  count?: number;
}

export interface TableColumn {
  key: string;
  label: string;
  width?: string;
  align?: 'left' | 'center' | 'right';
}

export interface OfficeInfo {
  tag: String,
  tagColor: String,
  policyNumber: string;
  companyName:String,
  companyAddress: string;
  phoneNoDisplay: string;
  agentName: string;
  agentPhoneNo: string;
  agentEmail: string;
  dateIssued: string;
  expirationDate: string;
  cardBgColor:string;
}

export interface FleetInfo {
  id: string;
  whereMarked: string;
  driver1: string;
  driver2: string;
  phoneNumber1: string;
  phoneNumber2: string;
  callCard: string;
}

export interface CarrierHistory {
  loadId: string;
  status: string;
  amount: number;
  pickupCity: string;
  date: string;
  deliveryCity: string;
  driverName: string;
}

export interface LoadInfo {
  title: string;
  description: string;
  onLocation: string;
  note: string;
  tripNumber: string;
}
