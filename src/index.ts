import { User } from 'User'

async function main() {
  let user = User.new({ email: 'john@example.com' })
  await user.save()
}

void main()
