import { Dyngoose } from 'dyngoose'
import { Model } from 'Model'
import { Organization } from 'Organization'
import { v4 } from 'uuid'

@Dyngoose.$Table({ name: 'user', billingMode: 'PAY_PER_REQUEST' })
export class User extends Model {
  @Dyngoose.$PrimaryKey('id')
  static readonly idIndex: Dyngoose.Query.PrimaryKey<User, string, null>

  @Dyngoose.Attribute.String({ default: () => v4() })
  id: string

  @Dyngoose.Attribute.String()
  email: string

  @Dyngoose.Attribute.String()
  orgId: string

  @Dyngoose.Attribute.String()
  name: string

  organization: Organization

  async getOrganization(): Promise<Organization> {
    return Organization.idIndex.get({ id: this.orgId })
  }
}
