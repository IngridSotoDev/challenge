import { faker } from '@faker-js/faker'
import { apiToken } from '@/http/api'
import { signIn } from './authentication'
import {
  IAuthenticationModel,
  IAuthenticationParams,
} from '@/types/authentication'

jest.mock('@/http/api', () => ({
  apiToken: {
    post: jest.fn(),
  },
}))

describe('Authentication Service', () => {
  afterEach(() => {
    jest.clearAllMocks()
  })

  it('calls apiToken.post with correct arguments for signIn', async () => {
    const mockParams: IAuthenticationParams = new FormData()
    const mockResponse: IAuthenticationModel = {
      access_token: faker.string.uuid(),
      expires_in: faker.number.int().toString(),
      jti: faker.string.uuid(),
      refresh_token: faker.string.uuid(),
      scope: faker.internet.protocol(),
      token_type: faker.internet.userAgent(),
    }

    ;(apiToken.post as jest.Mock).mockResolvedValueOnce({ data: mockResponse })

    await signIn(mockParams)

    expect(apiToken.post).toHaveBeenCalledWith('/oauth/token', mockParams, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    })
  })
})
