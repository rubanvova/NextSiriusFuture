import React, { ReactNode, useState } from 'react';
import styled from '@emotion/styled';
import Image from 'next/image';

const dataItems = [
  {
    name: 'Занятия',
    img: '/ic24-calendar-select-day.png',
  },
  {
    name: 'Учащиеся',
    img: '/ic24-user.png',
  },
  {
    name: 'Тренеры',
    img: '/ic24-book.png',
  },
  {
    name: 'Финансы',
    img: '/ic24-ruble.png',
  },
  {
    name: 'Абонементы',
    img: '/ic24-ticket.png',
  },
  {
    name: 'Доступ в CRM',
    img: '/ic24-flag.png',
  },
  {
    name: 'Рассылки',
    img: '/ic20-email.png',
  },
  {
    name: 'Отчеты',
    img: '/ic24-chart-bar.png',
  },
  {
    name: 'Настройки',
    img: '/ic24-settings.png',
  },
];

const ItemMenu: React.FC = () => {
  const [activeItem, setActiveItem] = useState('');

  const handlerActive = (item) => {
    setActiveItem(item);
  };

  interface PropsItemMenu {
    active?: ReactNode;
  }
  const Item = styled.div<PropsItemMenu>`
    color: ${(props) => (props.active ? '#000000' : 'rgba(0, 0, 0, 0.5)')};
    background: ${(props) => (props.active ? '#EDF0F5' : '#ffffff')};
    height: 45px;
    width: 210px;
    display: flex;
    align-items: center;
    cursor: pointer;
    border-left: ${(props) => (props.active ? '2px solid #2e71f3' : '')};
  `;

  const Img = styled.div<PropsItemMenu>`
    margin: 3px 10px 0px 20px;
    filter: ${(props: any) => (props.active ? 'opacity(1)' : 'opacity(0.3)')};
  `;
  return (
    <>
      {dataItems.map((i, index) => {
        if (activeItem === i.name) {
          return (
            <Item active onClick={() => handlerActive(i.name)} key={index}>
              <Img active>
                <Image
                  src={i.img}
                  alt="Picture of the author"
                  width={16}
                  height={16}
                />
              </Img>
              {i.name}
            </Item>
          );
        } else {
          return (
            <Item onClick={() => handlerActive(i.name)} key={index}>
              <Img>
                <Image
                  src={i.img}
                  alt="Picture of the author"
                  width={16}
                  height={16}
                />
              </Img>
              {i.name}
            </Item>
          );
        }
      })}
    </>
  );
};

const Menu: React.FC = () => {
  const Container = styled.div`
    background-color: #ffff;
    height: 900px;
    width: 210px;
    margin-right: 30px;
  `;

  const Logo = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 129px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  `;

  const ItemsMenu = styled.div`
    margin-top: 40px;
  `;

  return (
    <Container>
      <Logo>
        <Image
          src="/logo.png"
          alt="Picture of the author"
          width={120}
          height={69}
        />
      </Logo>
      <ItemsMenu>
        <ItemMenu />
      </ItemsMenu>
    </Container>
  );
};

export default Menu;
