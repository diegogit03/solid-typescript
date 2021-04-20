import { IndividualCustomerProtocol, EnterpriseCustomerProtocol, CustomerOrder } from './interfaces/customer-protocol'

export class IndividualCustomer implements IndividualCustomerProtocol, CustomerOrder {
  constructor(public firstName: string, public lastName: string, public cpf: string) {}

  public getName(): string {
    return this.firstName + ' ' + this.lastName;
  }

  public getIDN(): string {
    return this.cpf;
  }
}

export class EnterpriseCustomer implements EnterpriseCustomerProtocol, CustomerOrder {
  constructor(public name: string, public cnpj: string) {}

  public getName(): string {
    return this.name;
  }

  public getIDN(): string {
    return this.cnpj;
  }
}
