import React from 'react';
import { Size } from './Card';
import styled from '@emotion/styled';
import Card from './Card';
import Chart from './Chart';
import Image from 'next/image';
import Button from './Button';

const BoxChart = (props) => {
  const ContainerChart = styled.div`
    display: flex;
    flex-wrap: wrap;
  `;
  const Total = styled.div`
    margin: 5px 0px 20px 20px;
    font-size: 26px;
  `;
  const CardHead = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
  `;
  const BoxImage = styled.div`
    margin-right: 20px;
  `;
  const Proceeds = styled.div`
    font-size: 13px;
    color: #a8a8a8;
    margin: 20px 0px 0px 20px;
  `;

  const Buttons = styled.div`
    display: flex;
  `;

  const { chart, revenue } = props;

  return (
    <ContainerChart>
      <div>
        <Buttons>
          <Button>День</Button>
          <Button>Неделя</Button>
          <Button>Месяц</Button>
        </Buttons>
        <Card size={Size.big}>
          <CardHead>
            <div>
              <Proceeds>Выручка:</Proceeds>
              <Total>{revenue} руб.</Total>
            </div>
            <BoxImage>
              <Image src="/yandex.png" alt="" width={120} height={32} />
            </BoxImage>
          </CardHead>
          <Chart data={chart} />
        </Card>
      </div>
      <div>
        <Buttons>
          <Button>День</Button>
          <Button>Неделя</Button>
          <Button>Месяц</Button>
        </Buttons>
        <Card size={Size.big}>
          <CardHead>
            <div>
              <Proceeds>Выручка:</Proceeds>
              <Total>{revenue} руб.</Total>
            </div>
            <BoxImage>
              <Image src="/paypal.png" alt="" width={120} height={32} />
            </BoxImage>
          </CardHead>
          <Chart data={chart} />
        </Card>
      </div>
    </ContainerChart>
  );
};

export default BoxChart;
