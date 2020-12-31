import React, { useEffect, useState } from 'react';
import Menu from '../components/Menu';
import DataService from '../lib/data-service';
import styles from '../styles/Home.module.css';
import styled from '@emotion/styled';
import Card, { Size } from '../components/Card';
import Search from '../components/Search';
import Image from 'next/image';
import BoxChart from '../components/BoxChart';
import Button from '../components/Button';

const Home: React.FC = () => {
  const [state, setState] = useState({
    chart: [],
    revenue: 0,
    debtorsCount: 0,
    debtorsTotal: 0,
    usersCount: 0,
  });

  useEffect(() => {
    const {
      chart,
      revenue,
      debtorsCount,
      debtorsTotal,
      usersCount,
    } = DataService.getData();
    setState({
      chart,
      revenue,
      debtorsCount,
      debtorsTotal,
      usersCount,
    });
  }, []);

  const refresh = () => setState(DataService.getData());

  const { chart, revenue, debtorsCount, debtorsTotal, usersCount } = state;

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <Menu />
        <ContainerContent>
          <Header>
            <Search />
            <User></User>
          </Header>
          <BoxChart refresh={refresh} chart={chart} revenue={revenue} />
          <ContainerCard>
            <Card size={Size.litle}>
              <div>
                <BoxLitle>
                  <BoxImagelitle>
                    <Image
                      src="/ic24-users.png"
                      alt=""
                      width={34}
                      height={34}
                    />
                  </BoxImagelitle>
                  <Proceeds>
                    Количтество учеников:
                    <TotalLiltle>{usersCount}</TotalLiltle>
                  </Proceeds>
                </BoxLitle>
                <Str>
                  За последнюю неделю
                  <Dotted style={{ width: '65px' }}></Dotted>
                  <StrTotal>14</StrTotal>
                </Str>
                <Str>
                  Без абонемента
                  <Dotted style={{ width: '108px' }}></Dotted>
                  <StrTotal>13</StrTotal>
                </Str>
                <Str>
                  Неактивные<Dotted style={{ width: '130px' }}></Dotted>
                  <StrTotal>34</StrTotal>
                </Str>
                <Str>
                  Добавлено за день<Dotted style={{ width: '88px' }}></Dotted>
                  <StrTotal>53</StrTotal>
                </Str>
              </div>
            </Card>
            <ContainerSmallCard>
              <Card>
                <BoxSmall>
                  <Image src="/ruble.png" alt="" height={34} width={34} />
                  <div style={{ marginLeft: '10px' }}>
                    <Strsmall>Должников:</Strsmall>
                    <TotalLiltle>
                      {debtorsCount} ({debtorsTotal} р)
                    </TotalLiltle>
                  </div>
                </BoxSmall>
              </Card>
              <Card>
                <BoxSmall>
                  <Image src="/ticket.png" alt="" height={34} width={34} />
                  <div style={{ marginLeft: '10px' }}>
                    <Strsmall>Без абонемента:</Strsmall>
                    <TotalLiltle>53</TotalLiltle>
                  </div>
                </BoxSmall>
              </Card>
              <Card>
                <BoxSmall>
                  <Image src="/book.png" alt="" height={34} width={34} />
                  <div style={{ marginLeft: '10px' }}>
                    <Strsmall>Количество тренеров:</Strsmall>
                    <TotalLiltle>24</TotalLiltle>
                  </div>
                </BoxSmall>
              </Card>
              <Card>
                <BoxSmall>
                  <Image src="/ic24-wallet.png" alt="" height={34} width={34} />
                  <div style={{ marginLeft: '10px' }}>
                    <Strsmall>К оплате сегодня:</Strsmall>
                    <TotalLiltle>17</TotalLiltle>
                  </div>
                </BoxSmall>
              </Card>
              <Card>
                <BoxSmall>
                  <Image src="/wallet.png" alt="" height={34} width={34} />
                  <div style={{ marginLeft: '10px' }}>
                    <Strsmall>К оплате завтра:</Strsmall>
                    <TotalLiltle>32</TotalLiltle>
                  </div>
                </BoxSmall>
              </Card>
              <Card style={{ background: '#2E71F3' }}>
                <BoxSmall>
                  <Image
                    src="/ic24-file-edit.png"
                    alt=""
                    height={34}
                    width={34}
                  />
                  <div style={{ marginLeft: '10px' }}>
                    <TotalLiltle style={{ color: 'white', fontSize: '13px' }}>
                      Получить выписку по зарплате тренеров
                    </TotalLiltle>
                  </div>
                </BoxSmall>
              </Card>
            </ContainerSmallCard>
          </ContainerCard>
        </ContainerContent>
      </div>
    </div>
  );
};

export default Home;
const User = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 40px;
  background: #ffff;
  margin-right: 40px;
`;
const ContainerContent = styled.div`
  width: 100%;
`;
const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
  max-width: 1200px;
  margin-top: 30px;
  margin-bottom: 30px;
`;

const ContainerCard = styled.div`
  display: flex;
`;
const ContainerSmallCard = styled.div`
  display: flex;
  align-content: s;
  width: 75%;
  flex-wrap: wrap;
`;

const Proceeds = styled.div`
  font-size: 13px;
  color: #a8a8a8;
  margin: 20px 0px 0px 20px;
`;

const BoxLitle = styled.div`
  display: flex;
`;
const BoxImagelitle = styled.div`
  margin: 31px 0px 0px 20px;
`;

const TotalLiltle = styled.div`
  color: black;
  font-size: 26px;
  margin: 10px 0px 10px 0px;
`;

const Str = styled.div`
  display: flex;
  color: #a8a8a8;
  font-size: 13px;
  margin: 15px 0px 10px 20px;
`;

const Strsmall = styled.div`
  color: #a8a8a8;
  font-size: 13px;
`;

const StrTotal = styled.div`
  color: black;
  font-size: 13px;
  margin: 0px 0px 0px 5px;
`;

const Dotted = styled.div`
  border-bottom: 2px dotted #3333;
  margin: 0px 0px 4px 8px;
`;

const BoxSmall = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  margin-left: 20px;
`;
