import { screen, fireEvent } from '@testing-library/react'
import Produto from '..'
import { renderizaComProvider } from '../../../utils/test'

const jogo = {
  id: 2,
  categoria: 'RPG',
  imagem: '',
  plataformas: ['Windows', 'PS5', 'Xbox Series s/x'],
  preco: 170.99,
  precoAntigo: 198.4,
  titulo: 'Hogwarts Legacy'
}

describe('Testando o componente produto', () => {
  test('Deve renderizar corretamente', () => {
    renderizaComProvider(<Produto game={jogo} />)
    expect(screen.getByText('Hogwarts Legacy')).toBeInTheDocument()
  })

  test('Deve renderizar corretamente', () => {
    const { store } = renderizaComProvider(<Produto game={jogo} />)
    const button = screen.getByTestId('btn-adicionar-produto')
    fireEvent.click(button)

    expect(store.getState().carrinho.itens).toHaveLength(1)
  })
})
