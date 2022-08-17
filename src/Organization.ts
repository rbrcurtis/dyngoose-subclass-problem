import { Dyngoose } from 'dyngoose'
import { Model } from 'Model'
import { v4 } from 'uuid'

@Dyngoose.$Table({ name: 'user', billingMode: 'PAY_PER_REQUEST' })
export class Organization extends Model {
  @Dyngoose.$PrimaryKey('id')
  static readonly idIndex: Dyngoose.Query.PrimaryKey<Organization, string, null>

  @Dyngoose.Attribute.String({ default: () => v4() })
  id: string

  @Dyngoose.Attribute.String()
  name: string
}
