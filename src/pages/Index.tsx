import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Icon from "@/components/ui/icon";
import { useState } from "react";

const Index = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <div className="min-h-screen">
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-border">
        <div className="container mx-auto px-4 py-4">
          <nav className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="text-3xl">🐕</span>
              <h1 className="text-2xl font-bold text-primary">ПрофДогOnline</h1>
            </div>
            <div className="hidden md:flex items-center gap-6">
              <a href="#services" className="text-foreground hover:text-primary transition-colors">Услуги</a>
              <a href="#trainers" className="text-foreground hover:text-primary transition-colors">Кинологи</a>
              <a href="#pricing" className="text-foreground hover:text-primary transition-colors">Тарифы</a>
              <a href="#contact" className="text-foreground hover:text-primary transition-colors">Контакты</a>
              <Button className="rounded-full">Записаться</Button>
            </div>
            <Button variant="ghost" size="icon" className="md:hidden">
              <Icon name="Menu" size={24} />
            </Button>
          </nav>
        </div>
      </header>

      <section className="relative py-20 md:py-32 bg-gradient-to-b from-accent/30 to-background overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <Badge className="mb-4 rounded-full bg-primary/10 text-primary border-primary/20">
                Онлайн консультации 24/7
              </Badge>
              <h2 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                Профессиональная помощь в воспитании вашего питомца
              </h2>
              <p className="text-xl text-muted-foreground mb-8">
                Видеоконсультации с опытными кинологами в удобное для вас время. 
                Решим любые проблемы поведения и обучим командам дистанционно
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="rounded-full text-lg px-8">
                  <Icon name="Video" size={20} className="mr-2" />
                  Начать консультацию
                </Button>
                <Button size="lg" variant="outline" className="rounded-full text-lg px-8">
                  <Icon name="Phone" size={20} className="mr-2" />
                  Позвонить
                </Button>
              </div>
            </div>
            <div className="relative animate-scale-in">
              <div className="aspect-square rounded-3xl bg-gradient-to-br from-secondary to-accent p-8 flex items-center justify-center">
                <div className="text-9xl">🐶</div>
              </div>
              <div className="absolute -bottom-4 -right-4 bg-white rounded-2xl p-4 shadow-lg animate-fade-in">
                <div className="flex items-center gap-2">
                  <Icon name="Star" size={20} className="text-primary fill-primary" />
                  <span className="font-semibold">4.9/5</span>
                  <span className="text-muted-foreground text-sm">(500+ отзывов)</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <Badge className="mb-4 rounded-full">Наши услуги</Badge>
            <h2 className="text-4xl font-bold mb-4">Онлайн консультации для любых задач</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Работаем с собаками всех пород и возрастов
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: "GraduationCap",
                title: "Базовое послушание",
                description: "Обучение основным командам: сидеть, лежать, ко мне, рядом, место",
                features: ["Видеоурок", "Домашнее задание", "Поддержка 24/7"]
              },
              {
                icon: "Heart",
                title: "Коррекция поведения",
                description: "Решение проблем: агрессия, лай, страхи, деструктивное поведение",
                features: ["Анализ причин", "План коррекции", "Сопровождение"]
              },
              {
                icon: "Dog",
                title: "Социализация щенка",
                description: "Адаптация щенка к городской среде, общению с людьми и животными",
                features: ["Ранний возраст", "Игровые методы", "Быстрый результат"]
              }
            ].map((service, index) => (
              <Card key={index} className="hover:shadow-xl transition-all duration-300 animate-scale-in border-2 hover:border-primary/50 rounded-2xl">
                <CardHeader>
                  <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-4">
                    <Icon name={service.icon} size={28} className="text-primary" />
                  </div>
                  <CardTitle className="text-2xl">{service.title}</CardTitle>
                  <CardDescription className="text-base">{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <Icon name="Check" size={18} className="text-primary" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full rounded-full">Подробнее</Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="trainers" className="py-20 bg-gradient-to-b from-background to-secondary/20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <Badge className="mb-4 rounded-full">Наша команда</Badge>
            <h2 className="text-4xl font-bold mb-4">Опытные кинологи</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Профессионалы с многолетним стажем работы
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Анна Петрова",
                specialty: "Коррекция поведения",
                experience: "12 лет опыта",
                icon: "👩‍⚕️"
              },
              {
                name: "Дмитрий Волков",
                specialty: "Базовая дрессировка",
                experience: "8 лет опыта",
                icon: "👨‍🏫"
              },
              {
                name: "Елена Соколова",
                specialty: "Социализация щенков",
                experience: "10 лет опыта",
                icon: "👩‍🔬"
              }
            ].map((trainer, index) => (
              <Card key={index} className="text-center hover:shadow-xl transition-all duration-300 animate-scale-in rounded-2xl overflow-hidden">
                <CardHeader className="bg-gradient-to-br from-secondary to-accent pt-8">
                  <div className="text-8xl mb-4">{trainer.icon}</div>
                </CardHeader>
                <CardContent className="pt-6">
                  <h3 className="text-2xl font-bold mb-2">{trainer.name}</h3>
                  <p className="text-primary font-semibold mb-1">{trainer.specialty}</p>
                  <p className="text-muted-foreground">{trainer.experience}</p>
                  <div className="flex justify-center gap-1 mt-4">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Icon key={star} name="Star" size={18} className="text-primary fill-primary" />
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="justify-center">
                  <Button className="rounded-full">Записаться</Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="pricing" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <Badge className="mb-4 rounded-full">Тарифы</Badge>
            <h2 className="text-4xl font-bold mb-4">Выберите подходящий план</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Прозрачные цены без скрытых платежей
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              {
                name: "Разовая",
                price: "2 500",
                description: "Одна консультация",
                features: [
                  "60 минут видеосвязи",
                  "Анализ ситуации",
                  "Рекомендации",
                  "Запись консультации"
                ],
                popular: false
              },
              {
                name: "Базовый",
                price: "9 900",
                description: "5 консультаций",
                features: [
                  "5 × 60 минут видео",
                  "План обучения",
                  "Чат-поддержка",
                  "Все записи",
                  "Скидка 20%"
                ],
                popular: true
              },
              {
                name: "Премиум",
                price: "17 900",
                description: "10 консультаций",
                features: [
                  "10 × 60 минут видео",
                  "Персональный план",
                  "Поддержка 24/7",
                  "Все записи",
                  "Скидка 30%",
                  "Бонус: 2 консультации"
                ],
                popular: false
              }
            ].map((plan, index) => (
              <Card 
                key={index} 
                className={`relative hover:shadow-xl transition-all duration-300 animate-scale-in rounded-2xl ${
                  plan.popular ? 'border-primary border-2 shadow-lg scale-105' : ''
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <Badge className="rounded-full px-6 py-1 bg-primary text-white">Популярный</Badge>
                  </div>
                )}
                <CardHeader className="text-center pt-8">
                  <CardTitle className="text-2xl mb-2">{plan.name}</CardTitle>
                  <div className="mb-2">
                    <span className="text-5xl font-bold">{plan.price}</span>
                    <span className="text-xl text-muted-foreground"> ₽</span>
                  </div>
                  <CardDescription>{plan.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <Icon name="Check" size={18} className="text-primary flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button 
                    className={`w-full rounded-full ${plan.popular ? '' : 'variant-outline'}`}
                    variant={plan.popular ? 'default' : 'outline'}
                  >
                    Выбрать план
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 bg-gradient-to-b from-secondary/20 to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12 animate-fade-in">
              <Badge className="mb-4 rounded-full">Связаться с нами</Badge>
              <h2 className="text-4xl font-bold mb-4">Остались вопросы?</h2>
              <p className="text-xl text-muted-foreground">
                Напишите нам, и мы свяжемся с вами в ближайшее время
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <Card className="animate-scale-in rounded-2xl">
                <CardHeader>
                  <CardTitle>Контактная информация</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Icon name="Phone" size={24} className="text-primary" />
                    </div>
                    <div>
                      <p className="font-semibold mb-1">Телефон</p>
                      <p className="text-muted-foreground">+7 (999) 123-45-67</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Icon name="Mail" size={24} className="text-primary" />
                    </div>
                    <div>
                      <p className="font-semibold mb-1">Email</p>
                      <p className="text-muted-foreground">info@profdogonline.ru</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Icon name="Clock" size={24} className="text-primary" />
                    </div>
                    <div>
                      <p className="font-semibold mb-1">Режим работы</p>
                      <p className="text-muted-foreground">Ежедневно с 9:00 до 21:00</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="animate-scale-in rounded-2xl">
                <CardHeader>
                  <CardTitle>Отправить сообщение</CardTitle>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <Input
                        placeholder="Ваше имя"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="rounded-xl"
                      />
                    </div>
                    <div>
                      <Input
                        type="email"
                        placeholder="Email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="rounded-xl"
                      />
                    </div>
                    <div>
                      <Input
                        type="tel"
                        placeholder="Телефон"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="rounded-xl"
                      />
                    </div>
                    <div>
                      <Textarea
                        placeholder="Ваше сообщение"
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        rows={4}
                        className="rounded-xl"
                      />
                    </div>
                    <Button type="submit" className="w-full rounded-full">
                      Отправить
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-foreground text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <span className="text-3xl">🐕</span>
                <h3 className="text-xl font-bold">ПрофДогOnline</h3>
              </div>
              <p className="text-white/70">
                Профессиональные онлайн консультации по уходу и воспитанию собак
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Услуги</h4>
              <ul className="space-y-2 text-white/70">
                <li><a href="#services" className="hover:text-white transition-colors">Базовое послушание</a></li>
                <li><a href="#services" className="hover:text-white transition-colors">Коррекция поведения</a></li>
                <li><a href="#services" className="hover:text-white transition-colors">Социализация</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Компания</h4>
              <ul className="space-y-2 text-white/70">
                <li><a href="#trainers" className="hover:text-white transition-colors">О нас</a></li>
                <li><a href="#trainers" className="hover:text-white transition-colors">Команда</a></li>
                <li><a href="#contact" className="hover:text-white transition-colors">Контакты</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Соцсети</h4>
              <div className="flex gap-3">
                <Button variant="ghost" size="icon" className="rounded-full bg-white/10 hover:bg-white/20">
                  <Icon name="MessageCircle" size={20} />
                </Button>
                <Button variant="ghost" size="icon" className="rounded-full bg-white/10 hover:bg-white/20">
                  <Icon name="Instagram" size={20} />
                </Button>
                <Button variant="ghost" size="icon" className="rounded-full bg-white/10 hover:bg-white/20">
                  <Icon name="Youtube" size={20} />
                </Button>
              </div>
            </div>
          </div>
          <div className="border-t border-white/10 pt-8 text-center text-white/70">
            <p>&copy; 2024 ПрофДогOnline. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
