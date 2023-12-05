import { Container, Button } from 'react-bootstrap';
import './card.css'
import Footer from '../components/footer/Footer';
import { useForm } from 'react-hook-form';
import { useState } from 'react';

const Card = (props) => {
    const {title, isRegistration, buttonText} = props
    const { register, reset, handleSubmit, formState: {errors, isValid}, watch } = useForm({mode: 'onBlur'});

    const [showPassword, setShowPassword] = useState(false);

    const onSubmit = (data) => {
        if (isRegistration&&(data.password !== data.confirmPassword)) {
            alert('Пароли не совпадают')
            return;
        }
        else{
            alert(JSON.stringify({ email: data.email, password: data.password }));
            reset()
        }
       
    };
    const password = watch('password');
    const confirmPassword = watch('confirmPassword');

    return ( 
        <>
            <form onSubmit={handleSubmit(onSubmit)}>
                <Container className='card-container'>
                    <div className="card-box">
                        <h3 className="card-title">{title}</h3>

                        <div className="card_inputbox">
                            <input className='card-input' type="text" placeholder='EMAIL' 
                            {...register('email',
                                {   
                                    required: true,
                                    pattern: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/
                                })}
                            />
                            {errors.email && 
                                <span style={{color:'rgb(141, 23, 23)'}}>{errors?.email?.message || '*Некорректное заполнение поля "Email"'}</span>
                            }

                            <input className='card-input'
                                type={showPassword ? 'text' : 'password'}
                                placeholder='PASSWORD'
                                {...register('password',
                                    {required: true,
                                        minLength:{
                                            value:8,
                                            message:'Ненадёжный пароль'
                                        },
                                        maxLength:{
                                            value:64,
                                            message:'Слишком длинный пароль'
                                        }
                                    })
                                }
                            />
                            {errors.password && (
                                <span style={{ color: 'rgb(141, 23, 23)' }}>
                                    *{isRegistration ?
                                        (errors?.password?.message || 'Поле обязательно к заполнению') : 'Поле обязательно к заполнению'}
                                </span>
                            )}
                            
                            {isRegistration && (
                                <>
                                <input
                                    className='card-input'
                                    type={showPassword ? 'text' : 'password'}
                                    placeholder='CONFIRM PASSWORD' 
                                    {...register('confirmPassword', { required: true })}
                                />
                                {errors.confirmPassword && (
                                    <span style={{ color: 'rgb(141, 23, 23)' }}>
                                    *Подтвердите пароль
                                    </span>
                                )}
                                {password && (password !== confirmPassword && confirmPassword !== '') && (
                                    <span>Пароль и подтверждение пароля не совпадают</span>
                                )}
                                </>
                            )}
                        </div>

                        <Button 
                            variant='submit'
                            type='submit'
                            disabled={!isValid || (isRegistration && password !== watch('confirmPassword'))}
                        >   
                            {buttonText}
                        </Button>

                        {isRegistration && (
                            <div className="card_under-textbox">
                                <p className='small'>*Зарегистрируйтесь, чтобы записаться на обучение</p>
                                <p>Есть аккаунт? &#45;&#62;<a href="/login">Войти</a></p>
                            </div>
                        )}
                    </div>
                </Container>
            </form>

            <Footer/>
        </>
     );
}
 
export default Card;