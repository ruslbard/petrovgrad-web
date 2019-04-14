import React from 'react';
import {TinyButton as ScrollToUp} from 'react-scroll-up-button';

import PreHeader from '../pre-header/pre-header';
import Header from '../header/header';
import Services from "../services-section/services";
import OurTeam from '../our-team/our-team';
import Cooperation from "../cooperation/cooperation";
import BestOffers from '../best-offers/best-offers';
import FeedBacks from '../feedbacks/feedbacks';
import Footer from '../footer/footer';
import About from "../about/about";
import RequestForm from "../commons/request-form";

import './app.css';
import Location from "../location/location";

const appMainConf = {

    title: "ПетровГрад Недвижимость",
    logoText: "ПетровГрад",
    phoneText: "+7 (812) 241-14-01",
    email: "petrovgrad.realty@mail.ru",
    address: {city: "Санкт-Петербург", address: "Моховая, 28"},
    sections: [ {code: "services", label: "Услуги"},
                {code: "team", label: "Команда"},
                {code: "cooperation", label: "Сотрудничество"},
                {code: "offers", label: "Предложения"},
                {code: "about", label: "О нас"},
                {code: "location", label: "Контакты"}]
};


const services = {
    subsidies: {code: "subsidies", name: "Субсидии", text: "Любые виды сертификатов софинансирования от государства."},
    all_realty: {code: "all_realty", name: "Все виды недвижимости", text: "В нашей базе есть варианты с коммерческой, жилой и загородной недвижимостью."},
    estimation: {code: "estimation", name: "Оценка", text: "Чтобы не продешевить продавая квартиру и не переплачивать при покупке."},
    mortgage: {code: "mortgage", name: "Ипотека", text: "Ваши заботы по оформлению жилья в ипотеку станут нашей заботой."},
    privatization: {code: "privatization", name: "Приватизация", text: "Просто возьмем и сделаем ваше жилье вашим собственным, без лишних хлопот."},
    resale_realty: {code: "resale_realty", name: "Вторичная недвижимость", text: "В этой сфере мы одни из лучших, и мы этим по праву гордимся."}
};

const team = [
    {code: "0", name: "Мирная Анна", teamFunction: "менеджер"},
    {code: "1", name: "Минина Марина", teamFunction: "Специалист по недвижимости"},
    {code: "4", name: "Лякишев Юрий", teamFunction: "Специалист по недвижимости"}
];

const offers = [
    {code: 0, address: "2-к, м. Девяткино", living_area: 35.7, total_area: 68, price: '5 250 000'},
    {code: 1, address: "коттедж, п. Дубровка", living_area: 85, total_area: 120, price: '5 750 000'},
    {code: 2, address: "3-к, м. Пионерская", living_area: 45, total_area: 94, price: '8 770 000'},
    {code: 3, address: "коттедж, г. Всеволожск", living_area: 96, total_area: 196, price: '14 500 000'},
    {code: 4, address: "3-к, пр. Дунайский", living_area: 43, total_area: 70.8, price: '6 550 000'},
    {code: 5, address: "1-к, м. Беговая", living_area: 20, total_area: 38.8, price: '4 900 000'},

];

const feedbackData = [
    {code: 0, name: "Марина", date: new Date(2016,5,14,3,39).toLocaleDateString(), text: "Нам надо было продать 1к.кв. без ремонта. Мы обратились в «ПетровГрад». Его работой остались довольны. Все вопросы которые нас интересовали, нам разъяснили, нашли хороших покупателей и довольно таки быстро. Взяли на себя оформление всех документов, лишний раз нас не держали, были всегда на связи, если возникали вопросы. Спасибо."},
    {code: 1, name: "Ксюша", date: new Date(2016,5,13,11,45).toLocaleDateString(), text: "Спасибо за хорошую работу) Обменяли 2 к.кв. на 3 к.кв. с доплатой на В.О., задача стояла не простая, потому как хотелось не менять даже микрорайон из-за привязки к школам и садам, плюс ипотека с участием материнского капитала! Теперь мы счастливые обладатели квартиры о которой мечтали) Рекомендую теперь всем друзьям и знакомым! Еще раз спасибо!!"},
    {code: 2, name: "Станислава", date: new Date(2019,2,25,11,45).toLocaleDateString(), text: "В прошлом году наша семья решила наконец-то продать большую квартиру, и купить каждому отдельное жилье. Выставить квартиру на продажу самостоятельно мы побоялись, так как не знали, как правильно оформить сделку, боялись нарваться на мошенников, и просто слабо представляли реальную стоимость квартиры :) \n" +
            "Через знакомых я нашла агента Александра из компании «ПетровГрад», он подробно нас проконсультировал по всем возможным вариантам сделки, мы вместе выбрали наиболее подходящий. Александр присутствовал на каждом просмотре нашей квартиры, держал под контролем весь процесс продажи, помогал с поисками новых вариантов для каждого члена семьи, полностью взял на себя сбор и оформление документов, еще провел проверку покупаемого жилья, чтобы убедиться, что нет каких-то подводных камней. \n" +
            "В итоге, несмотря на всю сложность продажи-покупки, на длинную «цепочку» продавцов-покупателей, которая сложилась по ходу процесса, каждый из нас получил именно то, что планировал в итоге! Плюс Александр помог при оформлении ипотеки, т.к.возникли некоторые сложности, которые самостоятельно я бы точно не решила :) Выражаю благодарность и всем рекомендую этого агента из компании «ПетровГрад»!"}
];

class App extends React.Component{

    constructor (props) {
        super (props);
        this.state = {show: false};
    }


    handleHide = () => {
        this.setState({show: false});
    };

    handleShow = () => {
        this.setState({show: true});
    };
    render() {
        return (
            <div className={"app"}>
                <PreHeader conf={ appMainConf }/>
                <Header conf={ appMainConf } handleShow={ this.handleShow }/>
                <Services services={services}/>
                <OurTeam team={ team } handleShow={ this.handleShow }/>
                <Cooperation handleShow={ this.handleShow } />
                <BestOffers offers={ offers } handleShow={ this.handleShow }/>
                <FeedBacks feedbackData={ feedbackData }/>
                <About/>
                <Location x={59.941628} y={30.345575} zoom={14} conf={appMainConf}/>
                <Footer conf={ appMainConf }/>
                <RequestForm show={ this.state.show } parent={ this } handleHide={ this.handleHide }/>
                <ScrollToUp/>
            </div>
        )
    }
}

export default App;