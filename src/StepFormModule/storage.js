import sttore from "sttore"

export const state_form = sttore({
    name: '',
    lastname:'',
    email: '',
    password: '',
    phone:'',
    address:'',
})

export const state_step = sttore({
    step: 1
})