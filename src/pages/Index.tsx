import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';

export default function Index() {
  const [activeSection, setActiveSection] = useState('hero');

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-background">
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-border shadow-sm">
        <nav className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="text-2xl font-bold text-primary">
              Яндекс.Директ
            </div>
            <div className="hidden md:flex items-center gap-8">
              {[
                { id: 'hero', label: 'Главная' },
                { id: 'about', label: 'Обо мне' },
                { id: 'services', label: 'Услуги' },
                { id: 'cases', label: 'Кейсы' },
                { id: 'reviews', label: 'Отзывы' },
                { id: 'contact', label: 'Контакты' }
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`text-sm font-medium transition-colors hover:text-primary ${
                    activeSection === item.id ? 'text-primary' : 'text-foreground/70'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
            <Button onClick={() => scrollToSection('contact')}>
              Связаться
            </Button>
          </div>
        </nav>
      </header>

      <main className="pt-20">
        <section id="hero" className="py-20 bg-gradient-to-b from-blue-50 to-white">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6 animate-fade-in">
                <h1 className="text-5xl md:text-6xl font-bold text-foreground leading-tight">
                  Настройка контекстной рекламы
                  <span className="text-primary block mt-2">Яндекс.Директ</span>
                </h1>
                <p className="text-xl text-muted-foreground">
                  Помогаю бизнесу получать целевых клиентов через эффективную настройку рекламных кампаний
                </p>
                <div className="flex flex-wrap gap-4">
                  <Button size="lg" onClick={() => scrollToSection('contact')} className="hover-scale">
                    Получить консультацию
                  </Button>
                  <Button size="lg" variant="outline" onClick={() => scrollToSection('cases')}>
                    Посмотреть кейсы
                  </Button>
                </div>
                <div className="flex gap-8 pt-4">
                  <div>
                    <div className="text-3xl font-bold text-primary">50+</div>
                    <div className="text-sm text-muted-foreground">Успешных проектов</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-primary">5 лет</div>
                    <div className="text-sm text-muted-foreground">Опыт работы</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-primary">300%</div>
                    <div className="text-sm text-muted-foreground">Средний ROI</div>
                  </div>
                </div>
              </div>
              <div className="flex justify-center animate-fade-in">
                <img
                  src="https://cdn.poehali.dev/projects/359761ec-708d-4056-aaa0-eab47a5d3ac2/files/bcea65cb-0a96-4f1b-b6d8-3fd117399e24.jpg"
                  alt="Специалист по контекстной рекламе"
                  className="rounded-2xl shadow-2xl w-full max-w-md object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-4xl font-bold text-center mb-12">
                Обо мне
              </h2>
              <div className="space-y-6 text-lg text-muted-foreground">
                <p>
                  Я специалист по контекстной рекламе с 5-летним опытом работы в сфере digital-маркетинга. 
                  За это время успешно запустил более 50 рекламных кампаний для бизнеса различных ниш.
                </p>
                <p>
                  Мой подход основан на глубокой аналитике и постоянной оптимизации. Я не просто настраиваю рекламу, 
                  а выстраиваю полноценную стратегию привлечения клиентов с прогнозируемым результатом.
                </p>
                <div className="grid md:grid-cols-3 gap-6 pt-8">
                  <Card className="hover-scale">
                    <CardContent className="pt-6 text-center">
                      <Icon name="Target" size={40} className="mx-auto mb-4 text-primary" />
                      <h3 className="font-semibold mb-2">Целевой подход</h3>
                      <p className="text-sm text-muted-foreground">
                        Привлекаю только заинтересованную аудиторию
                      </p>
                    </CardContent>
                  </Card>
                  <Card className="hover-scale">
                    <CardContent className="pt-6 text-center">
                      <Icon name="TrendingUp" size={40} className="mx-auto mb-4 text-primary" />
                      <h3 className="font-semibold mb-2">Рост продаж</h3>
                      <p className="text-sm text-muted-foreground">
                        Фокус на конверсии и возврате инвестиций
                      </p>
                    </CardContent>
                  </Card>
                  <Card className="hover-scale">
                    <CardContent className="pt-6 text-center">
                      <Icon name="BarChart3" size={40} className="mx-auto mb-4 text-primary" />
                      <h3 className="font-semibold mb-2">Аналитика</h3>
                      <p className="text-sm text-muted-foreground">
                        Детальная отчетность по всем метрикам
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="services" className="py-20 bg-gradient-to-b from-white to-blue-50">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-12">
              Услуги
            </h2>
            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {[
                {
                  icon: 'Search',
                  title: 'Настройка рекламы с нуля',
                  description: 'Полный цикл создания рекламной кампании: анализ ниши, подбор ключевых слов, создание объявлений, настройка таргетинга',
                  features: ['Анализ конкурентов', 'Семантическое ядро', 'Написание объявлений', 'Настройка ставок']
                },
                {
                  icon: 'Settings',
                  title: 'Оптимизация существующих кампаний',
                  description: 'Аудит текущей рекламы и её улучшение для снижения стоимости клика и повышения конверсии',
                  features: ['Аудит кампаний', 'Оптимизация ставок', 'A/B тестирование', 'Отключение неэффективного']
                },
                {
                  icon: 'LineChart',
                  title: 'Ведение и управление',
                  description: 'Регулярная работа с кампаниями: мониторинг показателей, корректировка стратегии, масштабирование',
                  features: ['Ежедневный мониторинг', 'Корректировка бюджета', 'Расширение РК', 'Отчеты']
                },
                {
                  icon: 'FileText',
                  title: 'Консультации и обучение',
                  description: 'Помощь в освоении Яндекс.Директ для самостоятельного ведения рекламы',
                  features: ['Индивидуальные консультации', 'Разбор кампаний', 'Стратегия продвижения', 'Поддержка']
                }
              ].map((service, index) => (
                <Card key={index} className="hover-scale">
                  <CardContent className="pt-6">
                    <Icon name={service.icon} size={48} className="text-primary mb-4" />
                    <h3 className="text-2xl font-semibold mb-3">{service.title}</h3>
                    <p className="text-muted-foreground mb-4">{service.description}</p>
                    <ul className="space-y-2">
                      {service.features.map((feature, i) => (
                        <li key={i} className="flex items-center gap-2 text-sm">
                          <Icon name="CheckCircle2" size={16} className="text-primary flex-shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section id="cases" className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-12">
              Кейсы
            </h2>
            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {[
                {
                  title: 'Интернет-магазин электроники',
                  budget: '150 000 ₽/мес',
                  leads: '450',
                  cpl: '333 ₽',
                  roi: '380%',
                  description: 'Запуск рекламы для нового интернет-магазина. Привлечено 450 заказов за месяц.'
                },
                {
                  title: 'Стоматологическая клиника',
                  budget: '80 000 ₽/мес',
                  leads: '120',
                  cpl: '667 ₽',
                  roi: '420%',
                  description: 'Настройка таргетированной рекламы на премиум-услуги. Средний чек 15 000 ₽.'
                },
                {
                  title: 'Производство мебели',
                  budget: '200 000 ₽/мес',
                  leads: '85',
                  cpl: '2 353 ₽',
                  roi: '290%',
                  description: 'B2B реклама для производителя. Крупные заказы со средним чеком 180 000 ₽.'
                }
              ].map((caseItem, index) => (
                <Card key={index} className="hover-scale">
                  <CardContent className="pt-6">
                    <h3 className="text-xl font-semibold mb-4">{caseItem.title}</h3>
                    <p className="text-sm text-muted-foreground mb-6">{caseItem.description}</p>
                    <div className="space-y-3">
                      <div className="flex justify-between items-center pb-2 border-b">
                        <span className="text-sm text-muted-foreground">Бюджет</span>
                        <span className="font-semibold">{caseItem.budget}</span>
                      </div>
                      <div className="flex justify-between items-center pb-2 border-b">
                        <span className="text-sm text-muted-foreground">Лидов</span>
                        <span className="font-semibold text-primary">{caseItem.leads}</span>
                      </div>
                      <div className="flex justify-between items-center pb-2 border-b">
                        <span className="text-sm text-muted-foreground">Цена лида</span>
                        <span className="font-semibold">{caseItem.cpl}</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-muted-foreground">ROI</span>
                        <span className="font-bold text-primary text-xl">{caseItem.roi}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section id="reviews" className="py-20 bg-gradient-to-b from-white to-blue-50">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-12">
              Отзывы клиентов
            </h2>
            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {[
                {
                  name: 'Алексей Морозов',
                  position: 'Владелец интернет-магазина',
                  rating: 5,
                  text: 'Отличный специалист! За 3 месяца работы снизили стоимость заявки в 2 раза и увеличили количество продаж. Рекомендую!'
                },
                {
                  name: 'Елена Соколова',
                  position: 'Директор клиники',
                  rating: 5,
                  text: 'Профессиональный подход к работе. Всегда на связи, подробная отчетность. Реклама окупается с первого месяца.'
                },
                {
                  name: 'Дмитрий Волков',
                  position: 'Руководитель производства',
                  rating: 5,
                  text: 'Работаем уже больше года. Стабильный поток крупных заказов. Очень доволен результатом и сотрудничеством.'
                }
              ].map((review, index) => (
                <Card key={index} className="hover-scale">
                  <CardContent className="pt-6">
                    <div className="flex gap-1 mb-4">
                      {[...Array(review.rating)].map((_, i) => (
                        <Icon key={i} name="Star" size={20} className="text-yellow-400 fill-yellow-400" />
                      ))}
                    </div>
                    <p className="text-muted-foreground mb-6 italic">"{review.text}"</p>
                    <div className="border-t pt-4">
                      <div className="font-semibold">{review.name}</div>
                      <div className="text-sm text-muted-foreground">{review.position}</div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto">
              <h2 className="text-4xl font-bold text-center mb-4">
                Свяжитесь со мной
              </h2>
              <p className="text-center text-muted-foreground mb-12">
                Оставьте заявку и я свяжусь с вами в течение 1 часа
              </p>
              <Card>
                <CardContent className="pt-6">
                  <form className="space-y-6" onSubmit={(e) => {
                    e.preventDefault();
                    alert('Спасибо за заявку! Я свяжусь с вами в ближайшее время.');
                  }}>
                    <div>
                      <label className="block text-sm font-medium mb-2">Ваше имя</label>
                      <Input placeholder="Иван Иванов" required />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Телефон</label>
                      <Input type="tel" placeholder="+7 (999) 123-45-67" required />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Email</label>
                      <Input type="email" placeholder="example@mail.ru" required />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Сообщение</label>
                      <Textarea 
                        placeholder="Расскажите о вашем проекте и целях..." 
                        rows={5}
                        required
                      />
                    </div>
                    <Button type="submit" size="lg" className="w-full">
                      Отправить заявку
                    </Button>
                  </form>
                </CardContent>
              </Card>
              <div className="mt-12 grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <Icon name="Mail" size={32} className="mx-auto mb-3 text-primary" />
                  <div className="font-semibold mb-1">Email</div>
                  <div className="text-sm text-muted-foreground">info@direct-expert.ru</div>
                </div>
                <div className="text-center">
                  <Icon name="Phone" size={32} className="mx-auto mb-3 text-primary" />
                  <div className="font-semibold mb-1">Телефон</div>
                  <div className="text-sm text-muted-foreground">+7 (999) 123-45-67</div>
                </div>
                <div className="text-center">
                  <Icon name="MessageCircle" size={32} className="mx-auto mb-3 text-primary" />
                  <div className="font-semibold mb-1">Telegram</div>
                  <div className="text-sm text-muted-foreground">@direct_expert</div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-foreground text-white py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-sm">
              © 2024 Специалист по Яндекс.Директ. Все права защищены.
            </div>
            <div className="flex gap-6">
              <a href="#" className="hover:text-primary transition-colors">
                <Icon name="Globe" size={20} />
              </a>
              <a href="#" className="hover:text-primary transition-colors">
                <Icon name="Send" size={20} />
              </a>
              <a href="#" className="hover:text-primary transition-colors">
                <Icon name="Mail" size={20} />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}