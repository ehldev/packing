export const state = () => ({
    usuario: null,
    currentProductId: null
})

export const mutations = {
    setUsuario(state, usuario) {
        state.usuario = usuario
    },
    setProductId(state, value) {
        state.currentProductId = value
    }
}