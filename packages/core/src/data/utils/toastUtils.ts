const getMessage = (message: string) => {
  if (message === 'Anonymous sign-ins are disabled') {
    return 'Preencha todos os campos';
  }
  if (message === 'User already registered') {
    return 'Usuário já cadastrado';
  }
  if (message === 'Password should be at least 6 characters') {
    return 'Senha deve ter no mínimo 6 caracteres';
  }
  if (message === 'Invalid login credentials') {
    return 'Usuário ou senha inválidos';
  }
  if (message === 'Password should be at least 6 characters') {
    return 'Senha deve ter no mínimo 6 caracteres';
  }
  return 'Algo deu errado';
}

export default getMessage;