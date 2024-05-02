import { screen } from '@testing-library/react'
import Header from '..'
import { renderizaComProvider } from '../../../utils/test'

describe('Testando o componente header', () => {
  test('Deve renderizar corretamente', () => {
    renderizaComProvider(<Header />)
    expect(screen.getByText('EBAC Games')).toBeInTheDocument()
  })

  test('Deve renderizar com dois intens no carrinho', () => {
    renderizaComProvider(<Header />, {
      preloadedState: {
        carrinho: {
          itens: [
            {
              id: 1,
              categoria: 'Esportivo',
              imagem: '',
              plataformas: ['Porsche', 'Porsche Cayenne'],
              precoAntigo: 300000,
              preco: 600000,
              titulo: 'My first car'
            },
            {
              id: 2,
              categoria: 'Casa',
              imagem: '',
              plataformas: ['Beach', 'on vocation'],
              precoAntigo: 30000000,
              preco: 60000000,
              titulo: 'My home'
            }
          ]
        }
      }
    })
    expect(screen.getByTestId('qtd-carrinho').innerHTML).toContain('2 itens')
  })
})
