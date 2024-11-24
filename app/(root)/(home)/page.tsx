import React from 'react'
import Image from 'next/image'



const Home = () => {
  return (
    <div className="flex flex-col bg-white min-h-screen">
      {/* Заголовок */}
      <section className="w-full bg-secondary text-center text-white py-12">
        <h1 className="text-primarylight pb-5 md:text-3xl md:py-12">Консультации и юридическая поддержка</h1>
        <div className="flex justify-around pb-8 md:pb-10 ">
          <div>
            <p className="text-primary text-2xl md:text-5xl">2 года</p>
            <p className="text-primarylight md:text-2xl">на рынке</p>
          </div>

          <div>
            <p className="text-primary text-2xl md:text-5xl">17</p>
            <p className="text-primarylight md:text-2xl">контрактов</p>
          </div>

          <div>
            <p className="text-primary text-2xl md:text-5xl">2400</p>
            <p className="text-primarylight md:text-2xl">часов экспертизы</p>
          </div>
        </div>
      </section>

      {/* Специализация */}
      <section id="services" className="flex flex-col md:flex-row md:w-full md:min-h-screen flex-grow">
        <div className="flex w-full  flex-col md:flex-row">
          <div className="flex flex-col   text-center px-5">
            <h2 className="text-2xl sm:text-6xl sm:font-bold py-10">специализация</h2>
            <div><p className='text-primary text-4xl sm:font-bold text-center'>1</p>
              <p className='py-5'> Консультируем по правовым
                вопросам в области недропользования, инвестиционного,
                строительного, трудового и корпоративного права</p>
            </div>
            <div><p className='text-primary text-4xl sm:font-bold text-center'>2</p>
              <p className='py-5 '>
                Оказываем комплексную юриди
                ческую поддержку для бизнеса,
                помогая решать ключевые задачи
                и снижать риски на всех этапах
                развития</p>
            </div>
            <div><p className='text-primary text-4xl sm:font-bold text-center'>3</p>
              <p className='py-5'>
                Наша команда экспертов с опытом
                работы в госструктурах
                и международных юридических
                фирмах разрабатывает индиви
                дуальные решения, учитываю-щие
                уникальные потребности каждого
                клиента</p>
            </div>
            <div><p className='text-primary text-4xl sm:font-bold text-center'>4</p>
              <p className='py-5'> Создаём долгосрочные партнёр
                ства, стремясь к максимальной
                эффективности в решении бизнес
                задач наших клиентов.</p>
            </div>
          </div>

          <div className="relative h-[400px]  sm:h-auto sm:w-full">
            <div className="h-full">
              {/* Контейнер для изображения */}
              <Image
                src="/icons/decor.svg"
                width={300}
                height={300}
                alt="logo"
                className="absolute right-0 top-0 w-[300px] sm:w-[300px] md:w-[450px] lg:w-[450px] xl:w-[450px]"
              />

              {/* Текст поверх изображения */}
              <div className="absolute right-10 top-40 sm:top-60 sm:right-20 max-w-full sm:text-2xl">
                <div>
                  <p className="text-lg font-bold sm:font-bold">ОТРАСЛИ</p>
                  <p className="mt-2">нефтегазовая</p>
                  <p>горнорудная</p>
                  <p>энергетическая</p>
                  <p>строительная</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* Секция "new Section" */}
      <section className="flex   my-16">
        <div className='flex w-full flex-col sm:flex-row'>

          <div className='w-1/2'>
            <Image
              src="/images/pic1.png"
              width={300}
              height={300}
              alt="logo"
              className="w-full"
            />

          </div>
          <div className='w-full sm:w-1/2 p-8 sm:p-20'>
            <h2 className=' text-2xl  sm:text-6xl font-bold'>нефтегазовая
              отрасль</h2>
            <p className='text-end py-5 font-bold sm:text-2xl'>практика</p>
            <h3 className='text-2xl font-bold text-primary pb-3'>Недропользование</h3>
            <p><strong>Юридический due diligence (юридическая экспертиза):</strong> комплексная
              проверка правовых аспектов, выявление рисков касающиеся
              недропользования. <br /><br />

              <strong>Консультации по вопросам приобретения и отчуждения:</strong> права или
              объектов, связанных с правом недропользования посредством гражданско
              правовых сделок, аукциона или прямых переговоров.<br /><br />

              <strong>Консультации по вопросам продления сроков:</strong> разведки (оценки
              и пробной эксплуатации) и добычи.
              Консультации по закреплению периодов: подготовительного периода
              и периода добычи.
              <br /><br />
              <strong>Консультации по внесению изменений в контракт на
                недропользование:</strong> приведение в соответствие с типовым контрактом,
              изменение рабочей программы и изменение участка недр, а также другие
              условия</p>
          </div>
        </div>
      </section>

      <section>
        <div className='flex w-full flex-col sm:flex-row'>


          <div className='w-full sm:w-1/2 p-8 sm:p-20'>
            <h2 className=' text-2xl  sm:text-2xl font-bold'>НЕФТЕГАЗОВАЯ ОТРАСЛЬ</h2>
            <p className='text-end font-bold sm:text-2xl'>практика</p>
            <h3 className='text-2xl font-bold text-primary pb-3'>Недропользование</h3>
            <p><strong> Консультации по выделению участка недр:</strong> юридическое сопровождение
              процесса выделения участка недр из существующего контракта и его
              преобразование в отдельный новый контракт
              в соответствии с требованиями законодательства. <br /><br />

              <strong> Консультации по вопросу утверждения и прохождения согласования:</strong> проектных документов, программы развития переработки сырого газа.
              <br /><br />

              <strong>Обзор по вопросам:</strong>  практического применения законодательства
              и регулирования деятельности в сфере недропользования, Правил
              приобретения недропользователями и их подрядчиками товаров, работ
              и услуг
              <br /><br />
              <strong>Представительство в судебных органах.</strong> <br /><br />
              <strong> Юридические заключения:</strong> по различным вопросам, связанным
              с деятельностью в сфере недропользования</p>
          </div>

          <div className=' w-full  sm:w-1/2'>
            <Image
              src="/icons/decor2.svg"
              width={200}
              height={200}
              alt="logo"
              className="w-full"
            />
            <div className='sm:p-8 p-5'>
              <h3 className='text-2xl font-bold text-primary pb-3'> Газовая промышленность</h3>
              <p><strong>  Юридическое сопровождение проектов:</strong>  переработки и использования
                газа.</p> <br /><br />
              <p><strong>  Консультации:</strong>   по вопросу определения цены на сырой газ
                с учетом требований по согласованию и составлению документации.
              </p>
            </div>

          </div>
        </div>
      </section>


      {/* Секция "горнорудная отрасль" */}
      <section className="flex   my-16">
        <div className='flex w-full flex-col sm:flex-row'>

          <div className='w-1/2'>
            <Image
              src="/images/pic2.png"
              width={300}
              height={300}
              alt="logo"
              className="w-full"
            />

          </div>
          <div className='w-full sm:w-1/2 p-8 sm:p-20'>
            <h2 className=' text-2xl  sm:text-6xl font-bold'>горнорудная отрасль</h2>
            <p className='text-end py-5 font-bold sm:text-2xl'>практика</p>
            <h3 className='text-2xl font-bold text-primary pb-3'>Недропользование</h3>
            <p><strong>Юридический due diligence (юридическая экспертиза):</strong> комплексная
              проверка правовых аспектов, выявление рисков касающиеся
              недропользования. <br /><br />

              <strong>Консультации по вопросу: </strong>  получения лицензии на разведку
              и добычу, приобретения и отчуждения права или объектов связанных
              с правом недропользования посредством гражданско-правовых сделок.<br /><br />

              <strong> Консультации по переоформлению лицензий:</strong>  продление срока лицензий,
              изменение границ территории участка недр, а также другие условия
              <br /><br />
              <strong> Обзор по вопросам:</strong> практического применения законодательства
              и регулирования деятельности в сфере недропользования, Правил
              приобретения недропользователями и их подрядчиками товаров, работ
              и услуг.</p><br /><br />
            <strong>Представительство в судебных органах</strong>
            <br /><br />
            <p><strong>Юридические заключения:</strong> по различным вопросам, связанным
              с деятельностью в сфере недропользования.</p>
          </div>
        </div>
      </section>

      {/* Секция "энергетическая
 отрасль" */}
      <section className="flex   my-16">
        <div className='flex w-full flex-col sm:flex-row'>

          <div className='w-1/2'>
            <Image
              src="/images/pic3.png"
              width={300}
              height={300}
              alt="logo"
              className="w-full"
            />

          </div>
          <div className='w-full sm:w-1/2 p-8 sm:p-20'>
            <h2 className=' text-2xl  sm:text-6xl font-bold'>энергетическая отрасль</h2>
            <p className='text-end py-5 font-bold sm:text-2xl'>практика</p>
            {/* <h3 className='text-2xl font-bold text-primary pb-3'>Недропользование</h3> */}
            <p><strong>Консультации:</strong> по вопросу участия в аукционных торгах по отбору проектов
              возобновляемых источников энергии <br /><br />

              <strong>Обзор по вопросу: </strong> практического применения законодательства
              по поддержке использования возобновляемых источников энергии.<br /><br />

              <strong>  Юридические заключения: </strong>   по различным вопросам, связанным
              с деятельностью в сфере возобновляемых источников энергии.
              <br /><br />
            </p>
          </div>
        </div>
      </section>

      {/* строительная отрасль */}
      <section className="flex   my-16">
        <div className='flex w-full flex-col sm:flex-row'>

          <div className='w-1/2'>
            <Image
              src="/images/pic4.png"
              width={300}
              height={300}
              alt="logo"
              className="w-full"
            />

          </div>
          <div className='w-full sm:w-1/2 p-8 sm:p-20'>
            <h2 className=' text-2xl  sm:text-6xl font-bold'>строительная отрасль</h2>
            <p className='text-end py-5 font-bold sm:text-2xl'>практика</p>
            {/* <h3 className='text-2xl font-bold text-primary pb-3'>Недропользование</h3> */}
            <p><strong>Обзор общей правовой структуры строительного и других связанных
              контрактов </strong> (EPC, PMC, MSA, лицензионного контракта
              и т.д.) <br /><br />

              <strong> Краткое описание потенциальной коммерческой и корпоративной
                структуры предполагаемой сделки</strong> (строительные консорциумы,
              совместные предприятия, инвестиционные режимы, возможные
              государственные преференции и т.д.)<br /><br />

              <strong>  Подготовка отдельного или совместного договора проектирования,
                закупа и строительства, </strong>   связующего договора в соответствии
              с объемом совместного оншорного/оффшорного EPC и EPCм контрактов,
              подготовка EPC/EPCм контрактов.
              <br /><br />

              <strong>  Юридический анализ проекта контракта на строительство</strong> и других
              связанных контрактов на соответствие казахстанскому законодательству.<br /><br />

              <strong>   Предоставление юридического анализа </strong> в отношении специфичных
              вопросов и требований законодательства при заключении контрактов
              на строительство и других связанных контрактов.
              <br /><br />
            </p>
          </div>
        </div>
      </section>

      <section>
        <div className='flex w-full flex-col sm:flex-row'>
          <div className='w-full sm:w-1/2 p-8 sm:p-20'>
            <h2 className=' text-2xl  sm:text-2xl font-bold'>СТРОИТЕЛЬНАЯ ОТРАСЛЬ</h2>
            <p className='text-end pb-3 font-bold sm:text-2xl'>практика</p>
            {/* <h3 className='text-2xl font-bold text-primary pb-3'>Недропользование</h3> */}
            <p><strong>Юридическое сопровождение:</strong> при получении необходимых лицензий
              и разрешений для проведения проектирования и строительных работ. <br /><br />

              <strong>  Содействие в подготовке/проверке необходимых документов
                и заявления на получения необходимых лицензий и разрешений</strong>
              <br /><br />

              <strong>Участие в процессе переговоров:</strong>  с государственных органами
              и другими заинтересованными сторонами по EPC/строительному
              контракту/контракту на проектирование, используемых для осуществления
              строительной деятельности в Казахстане
              и в комплексных юрисдикциях, включая стандартные формы ФИДИК
              и другие связанные контракты
              <br /><br />
              <strong>Консультирование по вопросам требования налогового
                законодательства в отношении возможных рисков, </strong>  возникающих
              из осуществления строительной деятельности, международного
              налогообложения, оптимизации налогов, риски трансфертного
              ценообразования и т.д
              <br /><br />
            </p>
          </div>

          <div className=' w-full  sm:w-1/2'>
            <Image
              src="/icons/decor2.svg"
              width={200}
              height={200}
              alt="logo"
              className="w-full"
            />
            <div className='sm:p-8 p-5'>

              <p><strong>   Консультирование по вопросам требований таможенного
                законодательства</strong>   в отношении импорта, классификации товаров,
                таможенной процедуры и соответствия таможенному законодательству.</p> <br /><br />

            </div>

          </div>
        </div>
      </section>

      <section id="about" className="flex flex-col sm:w-full bg-secondary text-center py-12">
        <h3 className="text-primarylight pb-5 md:text-3xl md:py-12">эксперты компании</h3>
        <div className="flex flex-wrap  pb-8 md:pb-10 ">
          <div className='sm:w-1/3 p-3'>
            <p className="text-primary  text-2xl md:text-3xl">12 лет </p>
            <p className="text-primarylight text-start p-5">опыт работы в том числе
              руководство юридическим
              департаментом Министерства
              энергетики РК</p>
          </div>

          <div  className='sm:w-1/3 p-3'>
            <p className="text-primary text-2xl md:text-3xl">200 судебных
              дел </p>
            <p className="text-primarylight  p-5 text-start">по защите государственных интересов во
            всех судебных инстанциях</p>
          </div>

          <div  className='sm:w-1/3 p-3'>
            <p className="text-primary text-2xl md:text-xl text-start"> специализация
              по вопросам
              регулирования
              недропользования</p>
            <p className="text-primarylight p-5 text-start" >с акцентом на нефтегазовый
              сектор</p>
          </div>

          <div  className='sm:w-1/3 p-3'>
            <p className="text-primary text-2xl md:text-3xl">  участие в разработке
              Кодекса РК </p>
            <p className="text-primarylight p-5 text-start">«О недрах и недропользовании»,
              Закона РК «О газе и газоснабжении»</p>
          </div>
          <div  className='sm:w-1/3 p-3'>
            <p className="text-primary text-2xl md:text-3xl">обладатель медалей </p>
            <p className="text-primarylight p-5 text-start">«Ерен еңбегі үшін» и «Мұнай-газ кешенін
              дамытуға қосқан үлесі үшін»</p>
          </div>
          <div  className='sm:w-1/3 p-3'>
            <p className="text-primary text-2xl md:text-3xl">Данияр Байтереков  </p>
            <p className="text-primarylight p-5 text-start"> управляющий партнер
            </p>
          </div>
        </div>
      </section>


    </div>
  )
}

export default Home
