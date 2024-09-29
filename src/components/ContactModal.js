import React from 'react';
import styled from 'styled-components';
import { useForm } from 'react-hook-form';

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ModalContent = styled.div`
  background-color: white;
  padding: 20px;
  border-radius: 5px;
  width: 80%;
  max-width: 500px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  margin-bottom: 10px;
  padding: 5px;
`;

const Button = styled.button`
  padding: 10px;
  background-color: #003366;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

const ErrorMessage = styled.span`
  color: red;
  font-size: 0.8rem;
  margin-bottom: 5px;
`;

const ContactModal = ({ isOpen, onClose }) => {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = (data) => {
        console.log(data);
        // Aqui você pode implementar a lógica para enviar os dados do formulário
        onClose();
    };

    if (!isOpen) return null;

    return (
        <ModalOverlay>
            <ModalContent>
                <h2>Entre em contato</h2>
                <Form onSubmit={handleSubmit(onSubmit)}>
                    <Input
                        {...register('name', { required: 'Nome é obrigatório' })}
                        placeholder="Nome"
                    />
                    {errors.name && <ErrorMessage>{errors.name.message}</ErrorMessage>}

                    <Input
                        {...register('email', {
                            required: 'E-mail é obrigatório',
                            pattern: {
                                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                message: 'E-mail inválido'
                            }
                        })}
                        placeholder="E-mail"
                    />
                    {errors.email && <ErrorMessage>{errors.email.message}</ErrorMessage>}

                    <Input
                        {...register('phone', {
                            required: 'Telefone é obrigatório',
                            pattern: {
                                value: /^[0-9]{10,11}$/,
                                message: 'Telefone inválido'
                            }
                        })}
                        placeholder="Telefone"
                    />
                    {errors.phone && <ErrorMessage>{errors.phone.message}</ErrorMessage>}

                    <Button type="submit">Enviar</Button>
                </Form>
                <Button onClick={onClose}>Fechar</Button>
            </ModalContent>
        </ModalOverlay>
    );
};

export default ContactModal;
