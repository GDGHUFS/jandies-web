'use client';
import React, { useEffect, useState } from 'react';

interface Contribution {
  contributionCount: number; // 기여도 카운트 (0에서 30 사이)
  contributionLevel: string;
  color: string; // 색상 (기여도에 따라 결정됨)
  date: string; // 날짜 (YYYY-MM-DD 형식)
}

interface ContributionCalendarProps {
  username: string;
  year?: number;
}

const ContributionCalendar: React.FC<ContributionCalendarProps> = ({
  username,
  year = new Date().getFullYear(),
}) => {
  const [data, setData] = useState<Contribution[]>([]);
  const [loading, setLoading] = useState(true);

  // 더미 데이터를 사용하여 기여도 데이터를 생성
  useEffect(() => {
    const dummyData: Contribution[] = [
      {
        contributionCount: 10,
        contributionLevel: 'one',
        color: '0x00ff00',
        date: '2024-02-10',
      },
      {
        contributionCount: 10,
        contributionLevel: 'one',
        color: '0x00ff00',
        date: '2024-02-11',
      },
      {
        contributionCount: 10,
        contributionLevel: 'one',
        color: '0x00ff00',
        date: '2024-02-12',
      },
      // 더미 데이터를 추가적으로 필요한 만큼 추가할 수 있습니다
    ];

    // 이 데이터를 상태에 저장
    setData(dummyData);
    setLoading(false);
  }, [year]);

  if (loading) {
    return <p>Loading...</p>;
  }

  const renderCalendar = () => {
    const daysInYear: Contribution[] = [];
    const currentDate = new Date(year, 0, 1); // 시작 날짜: 1월 1일

    // 365일 날짜 데이터 생성
    const isLeapYear = (year: number) => {
      return year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0);
    };
    const totalDays = isLeapYear(year) ? 366 : 365;
    for (let i = 0; i < totalDays; i++) {
      const date = `${currentDate.getFullYear()}-${(currentDate.getMonth() + 1).toString().padStart(2, '0')}-${currentDate.getDate().toString().padStart(2, '0')}`;
      const contribution = data.find(item => item.date === date) || {
        date: date || '',
        contributionLevel: '',
        contributionCount: 0,
        color: '#ebedf0', // 기본 색상
      };
      daysInYear.push(contribution);
      currentDate.setDate(currentDate.getDate() + 1); // 하루씩 증가
    }

    const firstDayOfYear = new Date(year, 0, 1).getDay(); // 0 = Sunday, 1 = Monday, ..., 6 = Saturday
    const emptySlotsBeforeFirstDay = firstDayOfYear === 0 ? 6 : firstDayOfYear - 1; // 월요일은 1번째 칸에 위치

    return (
      <div style={{ display: 'flex', width: '80%' }}>
        {/* 요일 표시 */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            width: '60px',
            gap: '8px',
            alignItems: 'center',
            marginRight: '5px',
          }}
        >
          {['월', '화', '수', '목', '금', '토', '일'].map((day, index) => (
            <div
              key={index}
              style={{
                fontSize: '12px',
                textAlign: 'center',
                color: '#444',
                fontWeight: 'bold',
                writingMode: 'vertical-rl', // 세로로 요일을 표시
              }}
            >
              {day}
            </div>
          ))}
        </div>

        {/* 그리드 영역 */}
        <div
          className="calendar-container"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(53, 20px)', // 53개의 주
            gridTemplateRows: 'repeat(7, auto)', // 7일, 고정된 높이
            gap: '2px', // 간격 설정
            flexGrow: 1, // 그리드 영역 확장
          }}
        >
          {/* 날짜 그리드 */}
          {Array.from({ length: 53 }).map((_, colIndex) => (
            <div
              key={colIndex}
              style={{
                gridColumn: colIndex + 1,
                display: 'flex',
                flexDirection: 'column',
                gap: '2px',
              }}
            >
              {Array.from({ length: 7 }).map((_, rowIndex) => {
                const index = colIndex * 7 + rowIndex - emptySlotsBeforeFirstDay;
                const day = daysInYear[index] || {
                  date: '',
                  contributionCount: 0,
                  color: '#ebedf0',
                };

                // `date`가 빈 문자열인 경우, 칸을 비우고 그 자리는 차지하게 하기
                if (!day.date) {
                  return (
                    <div
                      key={rowIndex}
                      style={{
                        width: '20px', // 고정된 너비
                        height: '20px', // 고정된 높이
                        backgroundColor: 'transparent', // 빈 칸은 투명하게
                        cursor: 'default',
                      }}
                    ></div>
                  );
                }

                // `contributionCount`가 0일 경우에는 회색으로 표시
                const color = day.contributionCount === 0 ? '#dcdcdc' : `#${day.color.slice(2)}`;

                return (
                  <div
                    key={rowIndex}
                    style={{
                      width: '20px', // 고정된 너비
                      height: '20px', // 고정된 높이
                      backgroundColor: color, // 기여도 색상
                      borderRadius: '4px',
                      cursor: 'pointer',
                      position: 'relative',
                    }}
                    title={`Date: ${day.date}\nContributions: ${day.contributionCount}`}
                  ></div>
                );
              })}
            </div>
          ))}
        </div>
      </div>
    );
  };

  return (
    <div style={{ width: '100%' }}>
      <h1>
        GitHub Contributions for {username} in {year}
      </h1>
      {/* 12달을 상단에 배치 */}
      <div
        style={{
          display: 'flex',
          marginLeft: '22px',
          marginBottom: '5px',
          gap: '75px',
        }}
      >
        {Array.from({ length: 12 }).map((_, monthIndex) => (
          <div
            key={monthIndex}
            style={{
              fontSize: '14px',
              textAlign: 'center',
              color: '#444',
              fontWeight: 'bold',
            }}
          >
            {`${monthIndex + 1}월`}
          </div>
        ))}
      </div>

      {renderCalendar()}
    </div>
  );
};

export default ContributionCalendar;
