import astroPng from '../assets/Astro.png'
import {User, AtSign} from 'lucide-react'
import {Toaster, toast} from 'sonner'

import { Title } from './components/Title'
import { Card } from './components/Card'
import { Input } from './components/Input'
import { useState } from 'react'

export function App() {
  const [name,setName] = useState("") 
  const [email,setEmail] = useState("") 

  function sendMessage(){
    event.preventDefault()

    if(!name){
      return toast.error('O campo nome esta vazio')
    }

    if(!email){
      return toast.error('O campo email esta vazio')
    }

    toast.success("Sua mensagem enviada")
  }


  return (
    <div className='flex flex-col w-full'>
        
      <div className='flex flex-col h-[679px] w-full items-center  bg-bg_white gap-7 lg:flex-row-reverse md:h-full md:justify-between md:pb-24'>
        <img className='w-96 md:w-auto' src={astroPng} alt="Astronauta"/>

        <div className='flex flex-col text-cente gap-1 md:text-left md:ml-24'>

          <h1 className='text-title text-[32px] font-bold md:text-[58px] md:w-[531px]'>
            Explore sem limites
          </h1>

          <p className='font-semibold text-[20px] text-text md:text-[32px]'>
            Porque o aprendizado é contínuo
          </p>

          <a href='#Form' className='flex justify-center items-center mt-9 md:justify-start'>
            <img src="../assets/btn.svg" alt="Button Down" />
          </a>

        </div>

      </div>

      <main className='grid grid-rows-3 gap-12 bg-gradient-to-r from-gradientLeft to-gradientRight px-[39px] py-[52px] md:grid-rows-none md:grid-cols-3 md:px-16 md:py-28'>

          <Card 
            title='Não pare nunca' 
            text='Se você deseja ter sucesso nos estudos, é fundamental que você adote uma mentalidade de "não pare nunca".
            Estudar de forma consistente e contínua é a chave para o progresso e a conquista de seus objetivos.' 
            img='./assets/Planeta_1.svg'
          />

          <Card 
            title='Só volta' 
            text='Se você parou ou perdeu o ritmo em alguma atividade ou projeto, saiba que nunca é tarde para recomeçar.
            Às vezes, as circunstâncias podem mudar, ou podemos nos sentir desmotivados ou sobrecarregados.' 
            img='../assets/Planeta_2.svg'
          />

          <Card 
            title='Siga seu ritmo' 
            text='Avançar pouco a pouco mantém progresso constante em objetivos, evitando parar ou desistir.
            Mesmo pequenos passos nos aproximam do destino e motivam a continuidade. Não subestime o poder de cada ação rumo ao objetivo final.' 
            img='../assets/Planeta_3.svg'
          />

      </main>

      <section className=' bg-bg_white px-[39px] py-[52px] m-t-[78px] md:flex lg:flex-row lg:p-0 lg:items-center lg:pl-9 lg:justify-between' id='Form'>
          <form className='md:w-[595px]'>
            
            <Title text='Entre em contato'/>

              <div className='flex flex-col gap-6 mt-10'>
                <Input type='text' icon={User} placeholder='Seu nome' onChange={e => setName(e.target.value)}/>
                <Input type='email'icon={AtSign} placeholder='Email' onChange={e => setEmail(e.target.value)}/>

                <textarea
                  placeholder='Digite sua mensagem aqui...'
                  className='w-full rounded-[20px] border-2 border-borderColor text-text font-semibold p-4 outline-none'>
                </textarea>

                <button 
                  className='bg-gradient-to-r from-gradientLeft to-gradientRight text-white text-left w-fit p-4 rounded-2xl' 
                  onClick={sendMessage}>
                    <Toaster  richColors/>
                    Enviar mensagem
                </button>

              </div>
          </form>

          <img 
            className='hidden lg:block'
            src="../assets/stars.png"
            alt=""
          />
      </section>

      <footer className=' bg-gradient-to-r from-gradientLeft to-gradientRight text-white text-center p-6'>
        © 2023 - Rocketseat Explorer
      </footer>
    </div>
  )
}

