import { api } from '@/http/api'
import { index, show, update } from './supplier'
import { faker } from '@faker-js/faker'
import { ISupplierModel } from '@/types/supplier'

jest.mock('@/http/api', () => ({
  api: {
    get: jest.fn(),
    put: jest.fn(),
  },
}))

const mockSupplier = (): ISupplierModel =>
  ({
    publicId: faker.string.uuid(),
    cnpj: faker.commerce.isbn(),
  }) as ISupplierModel

describe('Authentication Service', () => {
  afterEach(() => {
    jest.clearAllMocks()
  })

  it('calls api.get with correct arguments for index', async () => {
    const mockResponse: ISupplierModel[] = [
      { publicId: faker.string.uuid(), cnpj: faker.commerce.isbn() },
    ] as ISupplierModel[]

    ;(api.get as jest.Mock).mockResolvedValueOnce({ data: mockResponse })

    const response = await index()

    expect(api.get).toHaveBeenCalledWith('/suppliers')
    expect(response).toEqual({ data: mockResponse })
  })

  it('calls api.get with correct arguments for show', async () => {
    const mockId = mockSupplier().publicId
    const mockResponse = mockSupplier()

    ;(api.get as jest.Mock).mockResolvedValueOnce({ data: mockResponse })

    const response = await show(mockId)

    expect(api.get).toHaveBeenCalledWith(`/suppliers/${mockId}`)
    expect(response).toEqual({ data: mockResponse })
  })

  it('calls api.put with correct arguments for update', async () => {
    const mockParams = mockSupplier()
    const mockResponse = mockSupplier()

    ;(api.put as jest.Mock).mockResolvedValueOnce({ data: mockResponse })

    const response = await update(mockParams)

    expect(api.put).toHaveBeenCalledWith('/suppliers', mockParams)
    expect(response).toEqual({ data: mockResponse })
  })
})
