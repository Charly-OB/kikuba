export interface Service {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  description: string;
  items: string[];
}

export interface WorkingStep {
  number: string;
  title: string;
  description: string;
}

export interface StackTool {
  name: string;
  category: string;
  description: string;
  color: string;
}

export interface ValueProp {
  title: string;
  description: string;
  iconName: string;
}

