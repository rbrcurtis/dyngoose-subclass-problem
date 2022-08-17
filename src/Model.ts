import { Dyngoose } from 'dyngoose'

export abstract class Model extends Dyngoose.Table {
  @Dyngoose.Attribute.Date({ nowOnCreate: true })
  createDate: Date

  @Dyngoose.Attribute.Date({ nowOnUpdate: true })
  updateDate: Date
}
