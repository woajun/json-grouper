const banana = [
  {
    name: '1-영업',
    path: 'ss',
    mids: [
      {
        name: '기준정보관리',
        id: 'SS-C0010',
        views: [
          {
            name: '공통코드관리',
            id: 'SS-C0010010',
            path: '/ss/common/code',
          },
          {
            name: '역마스터정보관리',
            id: 'SS-C0010020',
            path: '/ss/common/master',
          },
          {
            name: '역정보조회',
            id: 'SS-C0010030',
            path: '/ss/common/station',
          },
          {
            name: '기관정보조회',
            id: 'SS-C0010040',
            path: '/ss/common/institution',
          },
          {
            name: '기기정보조회',
            id: 'SS-C0010050',
            path: '/ss/common/device',
          },
          {
            name: '운임요금조회',
            id: 'SS-C0010060',
            path: '/ss/common/fee',
          },
          {
            name: 'AFC공통코드조회',
            id: 'SS-C0010070',
            path: '/ss/common/afc-code',
          },
        ],
      },
      {
        name: 'AFC연계관리',
        id: 'SS-TA010',
        views: [
          {
            name: 'AFC연계관리',
            id: 'SS-TA010010',
            path: '/ss/afc/detail',
          },
          {
            name: 'AFC연계현황',
            id: 'SS-TA010020',
            path: '/ss/afc/current',
          },
          {
            name: 'AFC연계실행',
            id: 'SS-TA010030',
            path: '/ss/afc/execution',
          },
        ],
      },
      {
        name: '수송계획관리',
        id: 'SS-TP010',
        views: [
          {
            name: '월별수송계획',
            id: 'SS-TP010010',
            path: '/ss/plan/monthly',
          },
          {
            name: '월별수송계획대비실적현황',
            id: 'SS-TP010020',
            path: '/ss/plan/monthly-performance',
          },
          {
            name: '년간수송계획대비실적현황',
            id: 'SS-TP010030',
            path: '/ss/plan/year-performance',
          },
        ],
      },
      {
        name: '수송수입현황',
        id: 'SS-TS010',
        views: [
          {
            name: '영업속보',
            id: 'SS-TS010010',
            path: '/ss/margin/news',
          },
          {
            name: '승차내역집계현황',
            id: 'SS-TS010020',
            path: '/ss/margin/riding',
          },
          {
            name: '역별수송실적현황',
            id: 'SS-TS010030',
            path: '/ss/margin/station',
          },
          {
            name: '일별수송실적현황',
            id: 'SS-TS010040',
            path: '/ss/margin/daily',
          },
          {
            name: '승객유형별 승차인원현황',
            id: 'SS-TS010050',
            path: '/ss/margin/passenger',
          },
          {
            name: '승차권종별 승차인원현황',
            id: 'SS-TS010060',
            path: '/ss/margin/ticket',
          },
          {
            name: '승차유형별 수송인원현황',
            id: 'SS-TS010070',
            path: '/ss/margin/type',
          },
          {
            name: '기간별 수송수입현황',
            id: 'SS-TS010080',
            path: '/ss/margin/period',
          },
          {
            name: '교통카드 종류별 충전현황',
            id: 'SS-TS010090',
            path: '/ss/margin/charging',
          },
          {
            name: '역간수송실적현황',
            id: 'SS-TS010100',
            path: '/ss/margin/between-station',
          },
          {
            name: '시간대별 수송인원현황',
            id: 'SS-TS010110',
            path: '/ss/margin/timely',
          },
          {
            name: '교통카드 지불수익금현황',
            id: 'SS-TS010120',
            path: '/ss/margin/card',
          },
          {
            name: '1회권발매현황',
            id: 'SS-TS010130',
            path: '/ss/margin/one-ticket',
          },
        ],
      },
      {
        name: '수송수입통계',
        id: 'SS-TS020',
        views: [
          {
            name: '요일별 수송인원현황',
            id: 'SS-TS020010',
            path: '/ss/stats/day',
          },
          {
            name: '연도별 수송인원현황',
            id: 'SS-TS020020',
            path: '/ss/stats/year',
          },
          {
            name: '최대/최소 승차인원',
            id: 'SS-TS020030',
            path: '/ss/stats/passenger',
          },
          {
            name: '평균 통행거리',
            id: 'SS-TS020040',
            path: '/ss/stats/distance',
          },
          {
            name: '일별 승/하차 인원 총괄표',
            id: 'SS-TS020050',
            path: '/ss/stats/daily-table',
          },
          {
            name: '월별 승/하차 인원 총괄표',
            id: 'SS-TS020060',
            path: '/ss/stats/monthly-table',
          },
        ],
      },
      {
        name: '운수수입심사',
        id: 'SS-TI010',
        views: [
          {
            name: '장비별운영실적',
            id: 'SS-TI010010',
            path: '/ss/judge/equipment',
          },
          {
            name: '발매기심사',
            id: 'SS-TI010020',
            path: '/ss/judge/vending',
          },
          {
            name: '정산기심사',
            id: 'SS-TI010030',
            path: '/ss/judge/settlement',
          },
          {
            name: '충전기심사',
            id: 'SS-TI010040',
            path: '/ss/judge/charger',
          },
          {
            name: '보증금반환기심사',
            id: 'SS-TI010050',
            path: '/ss/judge/return-deposit',
          },
          {
            name: '기기별현금회수내역',
            id: 'SS-TI010060',
            path: '/ss/judge/cash-history',
          },
        ],
      },
      {
        name: '인력취급',
        id: 'SS-TI020',
        views: [
          {
            name: '현급출납관리',
            id: 'SS-TI020010',
            path: '/ss/human/payment',
          },
          {
            name: '현금출납현황',
            id: 'SS-TI020020',
            path: '/ss/human/payment-detail',
          },
          {
            name: '특종현황',
            id: 'SS-TI020031',
            path: '/ss/human/news',
          },
          {
            name: '반환현황',
            id: 'SS-TI020041',
            path: '/ss/human/return-payment',
          },
          {
            name: '단체권현황',
            id: 'SS-TI020061',
            path: '/ss/human/group-ticket',
          },
        ],
      },
      {
        name: '정정보고',
        id: 'SS-TI030',
        views: [
          {
            name: '정정보고',
            id: 'SS-TI030010',
            path: '/ss/report/detail',
          },
          {
            name: '정정보고현황',
            id: 'SS-TI030020',
            path: '/ss/report/current',
          },
        ],
      },
      {
        name: '정정지시',
        id: 'SS-TI040',
        views: [
          {
            name: '정정지시',
            id: 'SS-TI040010',
            path: '/ss/instruction/detaul',
          },
          {
            name: '정정지시현황',
            id: 'SS-TI040020',
            path: '/ss/instruction/current',
          },
        ],
      },
      {
        name: '운수수입확정',
        id: 'SS-TI050',
        views: [
          {
            name: '은행예입금',
            id: 'SS-TI050010',
            path: '/ss/set-margin/deposit',
          },
          {
            name: '은행예입총관표',
            id: 'SS-TI050011',
            path: '/ss/set-margin/deposit-table',
          },
          {
            name: '역운수수입금확정',
            id: 'SS-TI050020',
            path: '/ss/set-margin/station',
          },
          {
            name: '일영업수입금확인',
            id: 'SS-TI050040',
            path: '/ss/set-margin/daily',
          },
        ],
      },
      {
        name: '영업수입마감',
        id: 'SS-TD010',
        views: [
          {
            name: '일영업수입금마감',
            id: 'SS-TD010010',
            path: '/ss/close-margin/registration',
          },
          {
            name: '마감전표발행',
            id: 'SS-TD010030',
            path: '/ss/close-margin/slip-registration',
          },
        ],
      },
      {
        name: '임대관리',
        id: 'SS-SE020',
        views: [
          {
            name: '임대계약',
            id: 'SS-SE020010',
            path: '/ss/lease/registration',
          },
          {
            name: '입대계약변경',
            id: 'SS-SE020020',
            path: '/ss/lease/change',
          },
          {
            name: '임대계약해지/만료',
            id: 'SS-SE020030',
            path: '/ss/lease/expiration',
          },
        ],
      },
      {
        name: '검침관리',
        id: 'SS-SE050',
        views: [
          {
            name: '검침요금관리',
            id: 'SS-SE050010',
            path: '/ss/reading/fee',
          },
        ],
      },
      {
        name: '청구관리',
        id: 'SS-SE060',
        views: [
          {
            name: '청구요금관리',
            id: 'SS-SE060010',
            path: '/ss/charge/fee',
          },
        ],
      },
      {
        name: '입금관리',
        id: 'SS-SE070',
        views: [
          {
            name: '입금내역',
            id: 'SS-SE070010',
            path: '/ss/deposit/detail',
          },
          {
            name: '미납관리',
            id: 'SS-SE070020',
            path: '/ss/deposit/unpaid',
          },
          {
            name: '입금현황',
            id: 'SS-SE070030',
            path: '/ss/deposit/current',
          },
          {
            name: '미납현황',
            id: 'SS-SE070040',
            path: '/ss/deposit/unpiad-current',
          },
        ],
      },
      {
        name: '역무일지관리',
        id: 'SS-BS010',
        views: [
          {
            name: '역무일지공통',
            id: 'SS-BS010010',
            path: '/ss/log/common',
          },
          {
            name: '역별역무일지(TAB-업무인수인계)',
            id: 'SS-BS010020',
            path: '/ss/log/transition',
          },
          {
            name: '역별역무일지(TAB-시설물고장신고)',
            id: 'SS-BS010030',
            path: '/ss/log/breakdown',
          },
          {
            name: '역별역무일지(TAB-보고사항)',
            id: 'SS-BS010040',
            path: '/ss/log/report',
          },
          {
            name: '역별역무일지(TAB-물품인수인계)',
            id: 'SS-BS010050',
            path: '/ss/log/give-goods',
          },
          {
            name: '역별역무일지(TAB-방문사항)',
            id: 'SS-BS010060',
            path: '/ss/log/visit',
          },
          {
            name: '역별역무일지(TAB-역사순회점검)',
            id: 'SS-BS010070',
            path: '/ss/log/check-station',
          },
          {
            name: '역별역무일지(TAB-열차순회점검)',
            id: 'SS-BS010080',
            path: '/ss/log/check-train',
          },
          {
            name: '역별역무일지(TAB-수동운전현황)',
            id: 'SS-BS010090',
            path: '/ss/log/manual-drive',
          },
          {
            name: '역별역무일지(TAB-계도활동)',
            id: 'SS-BS010100',
            path: '/ss/log/guiding-activities',
          },
        ],
      },
      {
        name: '유실물관리',
        id: 'SS-BS030',
        views: [
          {
            name: '유실물 등록',
            id: 'SS-BS030010',
            path: '/ss/lost/registration',
          },
          {
            name: '유실물인도등록',
            id: 'SS-BS030020',
            path: '/ss/lost/receive-registration',
          },
          {
            name: '유실물이관(폐기)처리',
            id: 'SS-BS030030',
            path: '/ss/lost/disposal',
          },
          {
            name: '유실물현황',
            id: 'SS-BS030040',
            path: '/ss/lost/list',
          },
          {
            name: '유실물접수현황',
            id: 'SS-BS030050',
            path: '/ss/lost/registration-list',
          },
          {
            name: '유실물처리현황',
            id: 'SS-BS030060',
            path: '/ss/lost/receive-list',
          },
          {
            name: '분실물신고접수',
            id: 'SS-BS030070',
            path: '/ss/lost/report',
          },
        ],
      },
      {
        name: '게시물관리',
        id: 'SS-BS040',
        views: [
          {
            name: '게시물관리',
            id: 'SS-BS040010',
            path: '/ss/board/manager',
          },
          {
            name: '게시물현황',
            id: 'SS-BS040020',
            path: '/ss/board/list',
          },
        ],
      },
      {
        name: '보고서',
        id: 'SS-BS050',
        views: [
          {
            name: '은행예입서',
            id: 'SS-BS050010-R1',
            path: '/ss/report/bank',
          },
          {
            name: '운수수입보고서',
            id: 'SS-BS050020-R1',
            path: '/ss/report/transportaiton',
          },
        ],
      },
    ],
  },
  {
    name: '2-시설물유지보수',
    path: 'fm',
    mids: [
      {
        name: '시설물정보관리',
        id: 'FM-FA010',
        views: [
          {
            name: '시설물제원',
            id: 'FM-FA010010',
            path: '/fm/facility/spec',
          },
        ],
      },
      {
        name: '사업공사관리',
        id: 'FM-FA020',
        views: [
          {
            name: '사업계획',
            id: 'FM-FA020010',
            path: '/fm/construction/businsess-plan',
          },
          {
            name: '공사용역계획',
            id: 'FM-FA020020',
            path: '/fm/construction-service/plan',
          },
          {
            name: '공사용역설계',
            id: 'FM-FA020030',
            path: '/fm/construction-service/design',
          },
          {
            name: '기성정보',
            id: 'FM-FA020040',
            path: '/fm/construction/leagacy-info',
          },
          {
            name: '준공정보',
            id: 'FM-FA020050',
            path: '/fm/construction/completed-info',
          },
          {
            name: '공사용역현황',
            id: 'FM-FA020060',
            path: '/fm/construction-service/status',
          },
        ],
      },
      {
        name: '하자관리',
        id: 'FM-FA030',
        views: [
          {
            name: '하자검사계획',
            id: 'FM-FA030010',
            path: '/fm/defect/test-plan',
          },
          {
            name: '하자검사실적',
            id: 'FM-FA030020',
            path: '/fm/defect/test-result',
          },
          {
            name: '하자보수계획',
            id: 'FM-FA030030',
            path: '/fm/defect/repair-plan',
          },
          {
            name: '하자보수실적',
            id: 'FM-FA030040',
            path: '/fm/defect/repair-result',
          },
          {
            name: '하자완료검사',
            id: 'FM-FA030050',
            path: '/fm/defect/complete-check',
          },
          {
            name: '하자현황',
            id: 'FM-FA030060',
            path: '/fm/defect/list',
          },
        ],
      },
      {
        name: '작업계획관리',
        id: 'FM-JB010',
        views: [
          {
            name: '연간작업계획',
            id: 'FM-JB010010',
            path: '/fm/task-plan/annual-plan',
          },
          {
            name: '월간작업계획',
            id: 'FM-JB010020',
            path: '/fm/task-plan/monthly-plan',
          },
          {
            name: '보수작업계획',
            id: 'FM-JB010030',
            path: '/fm/task-plan/maintenance-plan',
          },
          {
            name: '특별점검계획',
            id: 'FM-JB010040',
            path: '/fm/task-plan/special-check-plan',
          },
          {
            name: '중점관리/지적개소',
            id: 'FM-JB010050',
            path: '/fm/task-plan/special-task',
          },
          {
            name: '작업지시',
            id: 'FM-JB010060',
            path: '/fm/task-plan/request-task',
          },
        ],
      },
      {
        name: '작업실적관리',
        id: 'FM-JB020',
        views: [
          {
            name: '점검실적',
            id: 'FM-JB020010',
            path: '/fm/task-result/check',
          },
          {
            name: '점검실적상세',
            id: 'FM-JB020020',
            path: '/fm/task-result/check-detail',
          },
          {
            name: '보수실적',
            id: 'FM-JB020030',
            path: '/fm/task-result/maintenance',
          },
          {
            name: '보수실적상세',
            id: 'FM-JB020040',
            path: '/fm/task-result/maintenance-detail',
          },
          {
            name: '특별점검실적',
            id: 'FM-JB020050',
            path: '/fm/task-result/special',
          },
          {
            name: '특별점검실적상세',
            id: 'FM-JB020060',
            path: '/fm/task-result/special-detail',
          },
          {
            name: '중점관리/지적개소실적',
            id: 'FM-JB020070',
            path: '/fm/task-result/focused',
          },
          {
            name: '중점관리/지적개소실적상세',
            id: 'FM-JB020080',
            path: '/fm/task-result/focused-detail',
          },
          {
            name: '업무일지',
            id: 'FM-JB020090',
            path: '/fm/task-result/log',
          },
          {
            name: '업무일지상세',
            id: 'FM-JB020100',
            path: '/fm/task-result/log-detail',
          },
        ],
      },
      {
        name: '현황통계',
        id: 'FM-JB030',
        views: [
          {
            name: '보수현황',
            id: 'FM-JB030010',
            path: '/fm/present-statistics/maintenance-status',
          },
          {
            name: '계획대비실적',
            id: 'FM-JB030020',
            path: '/fm/present-statistics/performance',
          },
          {
            name: '월간점검결과현황',
            id: 'FM-JB030030',
            path: '/fm/present-statistics/monthly-check-result',
          },
          {
            name: '점검항목결과현황',
            id: 'FM-JB030040',
            path: '/fm/present-statistics/task-check-result',
          },
        ],
      },
      {
        name: '고장정보',
        id: 'FM-JB040',
        views: [
          {
            name: '고장정보',
            id: 'FM-JB040010',
            path: '/fm/fault/',
          },
        ],
      },
      {
        name: '업무권한관리',
        id: 'FM-SI010',
        views: [
          {
            name: '권한그룹별시설물업무',
            id: 'FM-SI010010',
            path: '/fm/authority/group-facility-task',
          },
        ],
      },
      {
        name: '시설물체계관리',
        id: 'FM-SI020',
        views: [
          {
            name: '시설물분류코드',
            id: 'FM-SI020010',
            path: '/fm/facility-structure/classify-code',
          },
          {
            name: '시설물분류체계',
            id: 'FM-SI020020',
            path: '/fm/facility-structure/classify-system',
          },
          {
            name: '시설물항목속성',
            id: 'FM-SI020030',
            path: '/fm/facility-structure/item-attribute',
          },
        ],
      },
      {
        name: '작업유형관리',
        id: 'FM-SI030',
        views: [
          {
            name: '작업종류',
            id: 'FM-SI030010',
            path: '/fm/task-type/',
          },
          {
            name: '점검표',
            id: 'FM-SI030020',
            path: '/fm/task-type/checklist',
          },
          {
            name: '점검표항목',
            id: 'FM-SI030030',
            path: '/fm/task-type/checklist-items',
          },
          {
            name: '작업별점검표',
            id: 'FM-SI030040',
            path: '/fm/task-type/checklist-per-work',
          },
        ],
      },
      {
        name: '작업자관리',
        id: 'FM-SI040',
        views: [
          {
            name: '작업조',
            id: 'FM-SI040010',
            path: '/fm/worker/group',
          },
          {
            name: '작업조별작업자',
            id: 'FM-SI040020',
            path: '/fm/worker/group-detail',
          },
          {
            name: '외주작업자',
            id: 'FM-SI040030',
            path: '/fm/worker/outsourcing',
          },
        ],
      },
      {
        name: '고장기초코드',
        id: 'FM-SI050',
        views: [
          {
            name: '고장기초코드',
            id: 'FM-SI050010',
            path: '/fm/fault-code/',
          },
        ],
      },
      {
        name: '타부서입회관리',
        id: 'FM-SI060',
        views: [
          {
            name: '타부서입회관리',
            id: 'FM-SI060010',
            path: '/fm/other-department-attending/',
          },
        ],
      },
      {
        name: '장비작업관리',
        id: 'FM-SP10',
        views: [
          {
            name: '검사계획',
            id: 'FM-SP10010',
            path: '/fm/equipment-work/plan',
          },
          {
            name: '검사실적',
            id: 'FM-SP10020',
            path: '/fm/equipment-work/result',
          },
        ],
      },
      {
        name: '장비정보관리',
        id: 'FM-SP20',
        views: [
          {
            name: '장비마스터',
            id: 'FM-SP20010',
            path: '/fm/equipment-info/master',
          },
          {
            name: '장비기준',
            id: 'FM-SP20020',
            path: '/fm/equipment-info/criteria',
          },
          {
            name: '장비검수기준',
            id: 'FM-SP20030',
            path: '/fm/equipment-info/test-criteria',
          },
        ],
      },
      {
        name: '장비현황',
        id: 'FM-SP30',
        views: [
          {
            name: '장비검사현황',
            id: 'FM-SP30010',
            path: '/fm/equipment-status/test-result',
          },
        ],
      },
      {
        name: '역사청소',
        id: 'FM-SP40',
        views: [
          {
            name: '역사청소실적',
            id: 'FM-SP40010',
            path: '/fm/cleaning-station/result',
          },
        ],
      },
      {
        name: '설비현황',
        id: 'FM-SP50',
        views: [
          {
            name: 'SCADA현황',
            id: 'FM-SP50010',
            path: '/fm/facility-status/scada',
          },
          {
            name: '기계설비현황',
            id: 'FM-SP50020',
            path: '/fm/facility-status/machine-facility',
          },
        ],
      },
    ],
  },
  {
    name: '3-열차운행',
    path: 'ts',
    mids: [
      {
        name: '열차기본정보관리',
        id: 'TS-BS010',
        views: [
          {
            name: '역구간정보등록',
            id: 'TS-BS010010',
            path: '/ts/common/section-info',
          },
          {
            name: '열차제약조건등록',
            id: 'TS-BS010020',
            path: '/ts/common/train-constraint',
          },
          {
            name: '운행요일정보등록',
            id: 'TS-BS010030',
            path: '/ts/common/operation-date',
          },
        ],
      },
      {
        name: '열차계획안관리',
        id: 'TS-TR010',
        views: [
          {
            name: '계획안번호등록',
            id: 'TS-TR010010',
            path: '/ts/plan/numbering',
          },
          {
            name: '계획안열차등록',
            id: 'TS-TR010020',
            path: '/ts/plan/train-regist',
          },
          {
            name: '계획안차량등록',
            id: 'TS-TR010030',
            path: '/ts/plan/vehicle-regist',
          },
          {
            name: '계획안열차정합성검사조회',
            id: 'TS-TR010040',
            path: '/ts/plan/train-consistency-test',
          },
          {
            name: '계획안차량정합성검사조회',
            id: 'TS-TR010050',
            path: '/ts/plan/vehicle-consistency-test',
          },
        ],
      },
      {
        name: '기본열차계획관리',
        id: 'TS-TR020',
        views: [
          {
            name: '기본계획번호등록',
            id: 'TS-TR020010',
            path: '/ts/basic-plan/numbering',
          },
          {
            name: '기본계획열차등록',
            id: 'TS-TR020020',
            path: '/ts/basic-plan/train-regist',
          },
          {
            name: '기본계획차량등록',
            id: 'TS-TR020030',
            path: '/ts/basic-plan/vehicle-regist',
          },
          {
            name: '기본계획열차정합성검사조회',
            id: 'TS-TR020040',
            path: '/ts/basic-plan/train-consistency-test',
          },
          {
            name: '기본계획차량정합성검사조회',
            id: 'TS-TR020050',
            path: '/ts/basic-plan/vehicle-consistency-test',
          },
          {
            name: '기본계획열차DIA조회',
            id: 'TS-TR020060',
            path: '/ts/basic-plan/dia-query',
          },
        ],
      },
      {
        name: '임시열차계획관리',
        id: 'TS-TR030',
        views: [
          {
            name: '임시계획열차등록',
            id: 'TS-TR030010',
            path: '/ts/temporary-plan/regist',
          },
          {
            name: '임시계획열차DIA조회',
            id: 'TS-TR030020',
            path: '/ts/temporary-plan/dia-query',
          },
        ],
      },
      {
        name: '일일열차계획관리',
        id: 'TS-TR040',
        views: [
          {
            name: '일일열차정보조회',
            id: 'TS-TR040010',
            path: '/ts/daily-plan/detail',
          },
          {
            name: '편성충당등록',
            id: 'TS-TR040020',
            path: '/ts/daily-plan/train-supplement',
          },
        ],
      },
      {
        name: '열차실적관리',
        id: 'TS-AC010',
        views: [
          {
            name: '일별운행실적현황',
            id: 'TS-AC010010',
            path: '/ts/train/daily-report',
          },
          {
            name: '월별운행실적현황',
            id: 'TS-AC010020',
            path: '/ts/train/monthly-report',
          },
          {
            name: '운행열차위치정보현황',
            id: 'TS-AC010030',
            path: '/ts/train/now-location',
          },
        ],
      },
      {
        name: '보수작업승인관리',
        id: 'TS-WK010',
        views: [
          {
            name: '보수작업승인등록',
            id: 'TS-WK010010',
            path: '/ts/train-maintaining-requests/',
          },
        ],
      },
      {
        name: '모터카운행승인관리',
        id: 'TS-WK020',
        views: [
          {
            name: '모터카운행승인등록',
            id: 'TS-WK020010',
            path: '/ts/motorcar-use-requests/',
          },
          {
            name: '열차운행시각표(기본계획)',
            id: 'TS-TR020070-R1',
            path: '/ts/report/train-schedule',
          },
          {
            name: '역별열차시각표(기본계획)',
            id: 'TS-TR020070-R2',
            path: '/ts/report/station-schedule',
          },
          {
            name: '열차운행시각표(임시계획)',
            id: 'TS-TR030030-R1',
            path: '/ts/report/train-scehdule-temporary',
          },
          {
            name: '역별열차시각표(임시계획)',
            id: 'TS-TR030030-R2',
            path: '/ts/report/station-schedule-temporary',
          },
        ],
      },
    ],
  },
  {
    name: '4-차량검수',
    path: 'im',
    mids: [
      {
        name: '차량정보관리',
        id: 'IM-RI010',
        views: [
          {
            name: '편성정보',
            id: 'IM-RI010010',
            path: '/im/train-info/train',
          },
          {
            name: '차량정보',
            id: 'IM-RI010020',
            path: '/im/train-info/car',
          },
          {
            name: '차량제원정보',
            id: 'IM-RI010030',
            path: '/im/train-info/car-spec',
          },
          {
            name: 'BOM',
            id: 'IM-RI010040',
            path: '/im/train-info/bom',
          },
          {
            name: '차축기준',
            id: 'IM-RI010050',
            path: '/im/train-info/axle-standard',
          },
          {
            name: '차륜기준',
            id: 'IM-RI010060',
            path: '/im/train-info/wheel-standard',
          },
        ],
      },
      {
        name: '열차실적관리',
        id: 'IM-TR010',
        views: [
          {
            name: '차량주행거리현황',
            id: 'IM-TR010010',
            path: '/im/train-mileage/',
          },
          {
            name: '연간차량주행거리현황',
            id: 'IM-TR010020',
            path: '/im/train-mileage/monthly',
          },
        ],
      },
      {
        name: '검사계획',
        id: 'IM-RM010',
        views: [
          {
            name: '경정비검사계획',
            id: 'IM-RM010010',
            path: '/im/train-testplan/light-maintain-plan',
          },
          {
            name: '중정비검사계획',
            id: 'IM-RM010020',
            path: '/im/train-testplan/heavy-maintain-plan',
          },
          {
            name: '검사작업요청',
            id: 'IM-RM010030',
            path: '/im/train-testplan/failure-detection-request',
          },
          {
            name: '차륜삭정작업요청',
            id: 'IM-RM010040',
            path: '/im/train-testplan/wheels-reprofiling-request',
          },
        ],
      },
      {
        name: '작업지시',
        id: 'IM-RM020',
        views: [
          {
            name: '경정비작업지시',
            id: 'IM-RM020010',
            path: '/im/train-repair-order/light-maintain-instruction',
          },
          {
            name: '중정비작업지시',
            id: 'IM-RM020020',
            path: '/im/train-repair-order/heavy-maintain-instruction',
          },
          {
            name: '차륜삭정작업지시',
            id: 'IM-RM020030',
            path: '/im/train-repair-order/wheel-reprofiling-instruction',
          },
        ],
      },
      {
        name: '작업실적',
        id: 'IM-RM030',
        views: [
          {
            name: '경정비작업실적',
            id: 'IM-RM030010',
            path: '/im/train-repair-result/light-maintain-result',
          },
          {
            name: '경정비공정실적',
            id: 'IM-RM030020',
            path: '/im/train-repair-result/light-maintain-process-result',
          },
          {
            name: '경정비검수표실적',
            id: 'IM-RM030030',
            path: '/im/train-repair-result/light-maintain-checklist',
          },
          {
            name: '중정비작업실적',
            id: 'IM-RM030040',
            path: '/im/train-repair-result/heavy-maintain-result',
          },
          {
            name: '중정비공정실적',
            id: 'IM-RM030050',
            path: '/im/train-repair-result/heavy-maintain-process-result',
          },
          {
            name: '중정비검수표실적',
            id: 'IM-RM030060',
            path: '/im/train-repair-result/heavy-maintain-checklist',
          },
          {
            name: '중정비정산',
            id: 'IM-RM030070',
            path: '/im/train-repair-result/heavy-maintain-caculate',
          },
        ],
      },
      {
        name: '고장정보',
        id: 'IM-RM040',
        views: [
          {
            name: '고장등록',
            id: 'IM-RM040010',
            path: '/im/train-failure/regist',
          },
          {
            name: '고장조치',
            id: 'IM-RM040020',
            path: '/im/train-failure/actions',
          },
          {
            name: '고장분석연계',
            id: 'IM-RM040030',
            path: '/im/train-failure/analyze-pass',
          },
        ],
      },
      {
        name: '차량청소',
        id: 'IM-RM050',
        views: [
          {
            name: '차량청소',
            id: 'IM-RM050010',
            path: '/im/train-cleaning/',
          },
        ],
      },
      {
        name: '윤축작업',
        id: 'IM-RM060',
        views: [
          {
            name: '경정비차륜작업',
            id: 'IM-RM060010',
            path: '/im/wheel-set/wheel-light-maintain',
          },
          {
            name: '중정비차륜작업',
            id: 'IM-RM060020',
            path: '/im/wheel-set/wheel-heavy-maintain',
          },
          {
            name: '차륜삭정결과',
            id: 'IM-RM060030',
            path: '/im/wheel-set/wheels-reprofiling-result',
          },
          {
            name: '차륜삭정내역',
            id: 'IM-RM060040',
            path: '/im/wheel-set/wheels-reprofiling-list',
          },
          {
            name: '차륜측정내역',
            id: 'IM-RM060050',
            path: '/im/wheel-set/wheels-measure-result',
          },
        ],
      },
      {
        name: '검수현황',
        id: 'IM-RM070',
        views: [
          {
            name: '경정비현황',
            id: 'IM-RM070010',
            path: '/im/inspection-status/light-maintain-report',
          },
          {
            name: '경정비계획대비실적',
            id: 'IM-RM070020',
            path: '/im/inspection-status/light-maintain-performance',
          },
          {
            name: '중정비검수내역',
            id: 'IM-RM070030',
            path: '/im/inspection-status/heavy-maintain-history',
          },
        ],
      },
      {
        name: '검수이력',
        id: 'IM-RM080',
        views: [
          {
            name: '전동차검수이력',
            id: 'IM-RM080010',
            path: '/im/inspection-history/train-maintain-history',
          },
          {
            name: '부품교환이력',
            id: 'IM-RM080020',
            path: '/im/inspection-history/parts-exchange-history',
          },
        ],
      },
      {
        name: '장비유지보수작업',
        id: 'IM-RA010',
        views: [
          {
            name: '장비검사계획',
            id: 'IM-RA010010',
            path: '/im/equipment-care/plan',
          },
          {
            name: '장비검사실적',
            id: 'IM-RA010020',
            path: '/im/equipment-care/result',
          },
          {
            name: '장비유지보수현황',
            id: 'IM-RA010030',
            path: '/im/equipment-care/performance',
          },
        ],
      },
      {
        name: '장비정보관리',
        id: 'IM-RA020',
        views: [
          {
            name: '장비마스터',
            id: 'IM-RA020010',
            path: '/im/equipment-info/master',
          },
          {
            name: '장비기준',
            id: 'IM-RA020020',
            path: '/im/equipment-info/standard',
          },
          {
            name: '장비검수기준',
            id: 'IM-RA020030',
            path: '/im/equipment-info/inspection-criteria',
          },
        ],
      },
      {
        name: '순환예비품',
        id: 'IM-RA030',
        views: [
          {
            name: '순환예비품운용현황',
            id: 'IM-RA030010',
            path: '/im/spare/management-status',
          },
        ],
      },
      {
        name: '고장현황',
        id: 'IM-AP010',
        views: [
          {
            name: '고장현황',
            id: 'IM-AP010010',
            path: '/im/failure-status/status',
          },
          {
            name: '고장이력',
            id: 'IM-AP010020',
            path: '/im/failure-status/history',
          },
        ],
      },
      {
        name: '고장분석',
        id: 'IM-AP020',
        views: [
          {
            name: 'FRACAS조회',
            id: 'IM-AP020010',
            path: '/im/failure-analysis/fracas',
          },
          {
            name: 'RAMS지표산출',
            id: 'IM-AP020020',
            path: '/im/failure-analysis/rams',
          },
          {
            name: 'RAMS그래프',
            id: 'IM-AP020030',
            path: '/im/failure-analysis/rams-graph',
          },
          {
            name: 'RCM기본정보',
            id: 'IM-AP020050',
            path: '/im/failure-analysis/rcm',
          },
          {
            name: '치명도산출',
            id: 'IM-AP020060',
            path: '/im/failure-analysis/calculate-fatality',
          },
          {
            name: '검수항목평가',
            id: 'IM-AP020070',
            path: '/im/failure-analysis/assess-inspected',
          },
        ],
      },
      {
        name: '검수종류',
        id: 'IM-SI010',
        views: [
          {
            name: '검수종류',
            id: 'IM-SI010010',
            path: '/im/inspection-kind/',
          },
        ],
      },
      {
        name: '검사공정',
        id: 'IM-SI020',
        views: [
          {
            name: '경정비검수공정',
            id: 'IM-SI020010',
            path: '/im/inspection-process/light-maintain-process',
          },
          {
            name: '중정비검수공정',
            id: 'IM-SI020020',
            path: '/im/inspection-process/heavy-maintain-process',
          },
          {
            name: '검사항목',
            id: 'IM-SI020030',
            path: '/im/inspection-process/todolist',
          },
        ],
      },
      {
        name: '검수표',
        id: 'IM-SI030',
        views: [
          {
            name: '검수표',
            id: 'IM-SI030010',
            path: '/im/inspection-table/',
          },
          {
            name: '표준검수표등록',
            id: 'IM-SI030020',
            path: '/im/inspection-table/standard-regist',
          },
          {
            name: '측정검수표등록',
            id: 'IM-SI030030',
            path: '/im/inspection-table/measurement-regist',
          },
          {
            name: '공정별검수표',
            id: 'IM-SI030040',
            path: '/im/inspection-table/sort-by-process',
          },
        ],
      },
      {
        name: '근무자',
        id: 'IM-SI040',
        views: [
          {
            name: '작업조',
            id: 'IM-SI040010',
            path: '/im/workers/group',
          },
          {
            name: '근무인원',
            id: 'IM-SI040020',
            path: '/im/workers/member',
          },
        ],
      },
      {
        name: '고장기초코드',
        id: 'IM-SI050',
        views: [
          {
            name: '고장기초코드',
            id: 'IM-SI050010',
            path: '/im/failure-code/',
          },
        ],
      },
    ],
  },
  {
    name: '5-안전환경',
    path: 'se',
    mids: [
      {
        name: '안전목표관리',
        id: 'SE-SM010',
        views: [
          {
            name: '안전목표등록',
            id: 'SE-SM010010',
            path: '/se/safety-goal/regist',
          },
          {
            name: '안전목표조회',
            id: 'SE-SM010020',
            path: '/se/safety-goal/list',
          },
        ],
      },
      {
        name: '안전계획대비실적관리',
        id: 'SE-SM020',
        views: [
          {
            name: '안전계획대비실적등록',
            id: 'SE-SM020010',
            path: '/se/safety-performance/',
          },
        ],
      },
      {
        name: '안전지도점검관리',
        id: 'SE-SM030',
        views: [
          {
            name: '안전지도점검계획등록',
            id: 'SE-SM030010',
            path: '/se/safety-guidance/plan-regist',
          },
          {
            name: '안전지도점검실적등록',
            id: 'SE-SM030020',
            path: '/se/safety-guidance/result-regist',
          },
        ],
      },
      {
        name: '사고관리',
        id: 'SE-TR010',
        views: [
          {
            name: '사고급보(동향)보고등록',
            id: 'SE-TR010010',
            path: '/se/accident/list',
          },
          {
            name: '철도사고보고등록',
            id: 'SE-TR010020',
            path: '/se/accident/report-list',
          },
        ],
      },
      {
        name: '위험도평가관리',
        id: 'SE-TR020',
        views: [
          {
            name: '철도사고내역등록(철도사고)',
            id: 'SE-TR020010',
            path: '/se/risk-evaluation/accident-regist',
          },
          {
            name: '운행장애내역등록(운행장애)',
            id: 'SE-TR020020',
            path: '/se/risk-evaluation/interruption-regist',
          },
          {
            name: '철도사고위험도평가내역(철도사고)',
            id: 'SE-TR020030',
            path: '/se/risk-evaluation/accident-result',
          },
          {
            name: '운행장애위험도평가내역(운행장애)',
            id: 'SE-TR020040',
            path: '/se/risk-evaluation/interruption-result',
          },
          {
            name: '고위험도현황조회(철도사고)',
            id: 'SE-TR020050',
            path: '/se/risk-evaluation/accident-highrisk',
          },
          {
            name: '고위험도현황조회(운행장애)',
            id: 'SE-TR020060',
            path: '/se/risk-evaluation/interruption-highrisk',
          },
        ],
      },
      {
        name: '배출시설관리',
        id: 'SE-DF010',
        views: [
          {
            name: '대기정보등록',
            id: 'SE-DF010010',
            path: '/se/discharge-facilities/air-quality-record',
          },
          {
            name: '수질정보등록',
            id: 'SE-DF010020',
            path: '/se/discharge-facilities/water-quality-record',
          },
          {
            name: '폐기물정보등록',
            id: 'SE-DF010030',
            path: '/se/discharge-facilities/waste-record',
          },
        ],
      },
      {
        name: '무재해관리',
        id: 'SE-IS010',
        views: [
          {
            name: '무재해등록',
            id: 'SE-IS010010',
            path: '/se/uninjury-record/regist',
          },
          {
            name: '무재해조회',
            id: 'SE-IS010020',
            path: '/se/uninjury-record/history',
          },
        ],
      },
      {
        name: '작업장위험성평가',
        id: 'SE-IS020',
        views: [
          {
            name: '작업장위험성평가등록',
            id: 'SE-IS020010',
            path: '/se/workplace-risk-evaluation/regist',
          },
        ],
      },
      {
        name: '환경목표관리',
        id: 'SE-EN010',
        views: [
          {
            name: '환경목표등록',
            id: 'SE-EN010010',
            path: '/se/environmental-objective/regist',
          },
          {
            name: '환경목표조회',
            id: 'SE-EN010020',
            path: '/se/environmental-objective/list',
          },
        ],
      },
      {
        name: '공기질관리',
        id: 'SE-EN020',
        views: [
          {
            name: '공기질일별현황조회',
            id: 'SE-EN020010',
            path: '/se/air-quality/daily-history',
          },
          {
            name: '공기질월별현황조회',
            id: 'SE-EN020020',
            path: '/se/air-quality/monthly-history',
          },
          {
            name: '공기질일별그래프현황',
            id: 'SE-EN020030',
            path: '/se/air-quality/daily-graph',
          },
          {
            name: '공기질월별그래프현황',
            id: 'SE-EN020040',
            path: '/se/air-quality/monthly-graph',
          },
        ],
      },
      {
        name: '소음진동관리',
        id: 'SE-EN030',
        views: [
          {
            name: '소음진동정보등록',
            id: 'SE-EN030010',
            path: '/se/noise-oscillation/regist',
          },
          {
            name: '소음진동현황조회',
            id: 'SE-EN030020',
            path: '/se/noise-oscillation/history',
          },
        ],
      },
    ],
  },
  {
    name: '6.전략경영',
    path: 'el',
    mids: [
      {
        name: '경영계획',
        id: 'EI-PL010',
        views: [
          {
            name: '단위사업관리',
            id: 'EI-PL010010',
            path: '/el/management-plan/unit',
          },
          {
            name: '중장기재정계획관리',
            id: 'EI-PL010020',
            path: '/el/management-plan/long',
          },
          {
            name: '중장기재정계획상세관리',
            id: 'EI-PL010030',
            path: '/el/management-plan/long-detail',
          },
          {
            name: '재정계획조정관리',
            id: 'EI-PL010040',
            path: '/el/management-plan/adjustment',
          },
          {
            name: '재정계획승인관리',
            id: 'EI-PL010050',
            path: '/el/management-plan/approval',
          },
          {
            name: '중장기재정계획편성결과',
            id: 'EI-PL010060',
            path: '/el/management-plan/result',
          },
          {
            name: '추정손익계산서',
            id: 'EI-PL010070',
            path: '/el/management-plan/guess-income',
          },
          {
            name: '추정사업예산결산서',
            id: 'EI-PL010080',
            path: '/el/management-plan/guess-budget',
          },
        ],
      },
      {
        name: '영업부문',
        id: 'EI-PSS010',
        views: [
          {
            name: '영업총괄현황',
            id: 'EI-PSS010010',
            path: '/el/sales/all',
          },
          {
            name: '운수수입현황',
            id: 'EI-PSS010020',
            path: '/el/sales/transportation',
          },
          {
            name: '역별운수수입현황',
            id: 'EI-PSS010030',
            path: '/el/sales/station',
          },
          {
            name: '수송인원현황',
            id: 'EI-PSS010040',
            path: '/el/sales/people',
          },
          {
            name: '역별승하차현황',
            id: 'EI-PSS010050',
            path: '/el/sales/station',
          },
          {
            name: '시간대별승하차현황',
            id: 'EI-PSS010060',
            path: '/el/sales/timely',
          },
          {
            name: '요일별승하차현황',
            id: 'EI-PSS010070',
            path: '/el/sales/day',
          },
          {
            name: '부대수입현황',
            id: 'EI-PSS010080',
            path: '/el/sales/additional',
          },
          {
            name: '수송목표대비실적',
            id: 'EI-PSS010090',
            path: '/el/sales/performance',
          },
        ],
      },
      {
        name: '재무부문',
        id: 'EI-AC010',
        views: [
          {
            name: '재무현황',
            id: 'EI-AC010010',
            path: '/el/financial/financial',
          },
          {
            name: '손익현황',
            id: 'EI-AC010020',
            path: '/el/financial/margin',
          },
          {
            name: '예산편성대비집행현황',
            id: 'EI-AC010030',
            path: '/el/financial/budget-performance',
          },
          {
            name: '자금차입현황',
            id: 'EI-AC010040',
            path: '/el/financial/borrowing',
          },
          {
            name: '자금상환현황',
            id: 'EI-AC010050',
            path: '/el/financial/repay',
          },
          {
            name: '일일자금현황',
            id: 'EI-AC010060',
            path: '/el/financial/daily',
          },
        ],
      },
      {
        name: '인력운영부문',
        id: 'EI-HR010',
        views: [
          {
            name: '인사정보조회',
            id: 'EI-HR010010',
            path: '/el/hr/current',
          },
          {
            name: '부서별,직급별인원현황',
            id: 'EI-HR010020',
            path: '/el/hr/department',
          },
          {
            name: '직원채용현황',
            id: 'EI-HR010030',
            path: '/el/hr/employment',
          },
          {
            name: '직원퇴직현황',
            id: 'EI-HR010040',
            path: '/el/hr/retirement',
          },
          {
            name: '근무형태별급여지급현황',
            id: 'EI-HR010050',
            path: '/el/hr/worktype',
          },
          {
            name: '급여항목별급여지급현황',
            id: 'EI-HR010060',
            path: '/el/hr/salary-item',
          },
        ],
      },
      {
        name: '시설물부문',
        id: 'EI-FM010',
        views: [
          {
            name: '시설물현황',
            id: 'EI-FM010010',
            path: '/el/facilities/current',
          },
          {
            name: '시설물유지관리현황',
            id: 'EI-FM010020',
            path: '/el/facilities/maintenance',
          },
          {
            name: '시설물장해현황',
            id: 'EI-FM010030',
            path: '/el/facilities/failure',
          },
          {
            name: '전력사용량현황',
            id: 'EI-FM010040',
            path: '/el/facilities/power-usage',
          },
        ],
      },
      {
        name: '열차운행부문',
        id: 'EI-TR010',
        views: [
          {
            name: '열차장애현황',
            id: 'EI-TR010010',
            path: '/el/train-operations/failure',
          },
        ],
      },
      {
        name: '차량검수부문',
        id: 'EI-IM010',
        views: [
          {
            name: '열차유지관리현황',
            id: 'EI-IM010020',
            path: '/el/train-inspection/maintenance',
          },
          {
            name: '검수계획대비실적현황',
            id: 'EI-IM010030',
            path: '/el/train-inspection/performance',
          },
          {
            name: '검수원가현황',
            id: 'EI-IM010040',
            path: '/el/train-inspection/cost',
          },
        ],
      },
      {
        name: '구매자재부문',
        id: 'EI-PM010',
        views: [
          {
            name: '공종별수불현황',
            id: 'EI-PM010010',
            path: '/el/purchasing-materials/supply',
          },
          {
            name: '부서별안전재고현황',
            id: 'EI-PM010020',
            path: '/el/purchasing-materials/inventory',
          },
        ],
      },
    ],
  },
  {
    name: '7-인력운영',
    path: 'hr',
    mids: [
      {
        name: '인사기초관리',
        id: 'HR-HA010',
        views: [
          {
            name: '인사코드등록',
            id: 'HR-HA010010',
            path: '/hr/basic-personnel/personnel-code',
          },
          {
            name: '직급코드등록',
            id: 'HR-HA010010-T1',
            path: '/hr/basic-personnel/position-code',
          },
          {
            name: '발령코드등록',
            id: 'HR-HA010010-T2',
            path: '/hr/basic-personnel/issue-code',
          },
          {
            name: '부서코드등록',
            id: 'HR-HA010020',
            path: '/hr/basic-personnel/department-code',
          },
          {
            name: '부서직위등록',
            id: 'HR-HA010030',
            path: '/hr/basic-personnel/department-position',
          },
          {
            name: '승진소요연한등록',
            id: 'HR-HA010040',
            path: '/hr/basic-personnel/required-promotion',
          },
        ],
      },
      {
        name: '조직관리',
        id: 'HR-HA020',
        views: [
          {
            name: '부서직급별정원등록',
            id: 'HR-HA020010',
            path: '/hr/organizational/department-max',
          },
          {
            name: '직군직급별정원등록',
            id: 'HR-HA020020',
            path: '/hr/organizational/occupational-max',
          },
          {
            name: '조직별인사현황',
            id: 'HR-HA020030',
            path: '/hr/organizational/organization',
          },
          {
            name: '정현원현황',
            id: 'HR-HA020040',
            path: '/hr/organizational/current',
          },
        ],
      },
      {
        name: '채용관리',
        id: 'HR-HA030',
        views: [
          {
            name: '임용후보자등록',
            id: 'HR-HA030010',
            path: '/hr/recruitment/candidate-registration',
          },
          {
            name: '임용후보자 기본사항탭',
            id: 'HR-HA030010-T1',
            path: '/hr/recruitment/candidate-information',
          },
          {
            name: '임용후보자 경력사항탭',
            id: 'HR-HA030010-T2',
            path: '/hr/recruitment/candidate-career',
          },
          {
            name: '임용등록작업',
            id: 'HR-HA030020',
            path: '/hr/recruitment/registration',
          },
        ],
      },
      {
        name: '인사관리',
        id: 'HR-HA040',
        views: [
          {
            name: '개인정보등록',
            id: 'HR-HA040010',
            path: '/hr/peronnel/registration',
          },
          {
            name: '인사기본정보등록',
            id: 'HR-HA040020',
            path: '/hr/peronnel/basic-registration',
          },
          {
            name: '기본사항 탭',
            id: 'HR-HA040020-T1',
            path: '/hr/peronnel/basic',
          },
          {
            name: '발령사항 탭',
            id: 'HR-HA040020-T2',
            path: '/hr/peronnel/announcement',
          },
          {
            name: '자격사항 탭',
            id: 'HR-HA040020-T3',
            path: '/hr/peronnel/credentials',
          },
          {
            name: '포상사항 탭',
            id: 'HR-HA040020-T4',
            path: '/hr/peronnel/rewards',
          },
          {
            name: '어학사항 탭',
            id: 'HR-HA040020-T5',
            path: '/hr/peronnel/language-information',
          },
          {
            name: '출장사항 탭',
            id: 'HR-HA040020-T6',
            path: '/hr/peronnel/business-trip',
          },
          {
            name: '가족사항 탭',
            id: 'HR-HA040020-T7',
            path: '/hr/peronnel/family-detail',
          },
          {
            name: '학력사항 탭',
            id: 'HR-HA040020-T8',
            path: '/hr/peronnel/educational-background',
          },
          {
            name: '경력사항 탭',
            id: 'HR-HA040020-T9',
            path: '/hr/peronnel/career-history',
          },
          {
            name: '비밀보안 탭',
            id: 'HR-HA040020-T10',
            path: '/hr/peronnel/secret-security',
          },
          {
            name: '휴가사항 탭',
            id: 'HR-HA040020-T11',
            path: '/hr/peronnel/vacation',
          },
          {
            name: '승진승급발령등록',
            id: 'HR-HA040030',
            path: '/hr/peronnel/promotion',
          },
          {
            name: '인사발령등록',
            id: 'HR-HA040040',
            path: '/hr/peronnel/appointment-registration',
          },
          {
            name: '정기승진승급대상자조회',
            id: 'HR-HA040050',
            path: '/hr/peronnel/promotion',
          },
          {
            name: '포상대상자등록',
            id: 'HR-HA040060',
            path: '/hr/peronnel/reward-registration',
          },
          {
            name: '징계대상자등록',
            id: 'HR-HA040070',
            path: '/hr/peronnel/disciplinary-registration',
          },
          {
            name: '징계 탭',
            id: 'HR-HA040070-T1',
            path: '/hr/peronnel/disciplinary',
          },
          {
            name: '주의.경고 탭',
            id: 'HR-HA040070-T2',
            path: '/hr/peronnel/warning',
          },
          {
            name: '비밀보안등록',
            id: 'HR-HA040080',
            path: '/hr/peronnel/security-registration',
          },
        ],
      },
      {
        name: '인사정보현황',
        id: 'HR-HA050',
        views: [
          {
            name: '인사정보현황',
            id: 'HR-HA050010',
            path: '/hr/personnel-status/current',
          },
          {
            name: '경력사항 탭',
            id: 'HR-HA050010-T1',
            path: '/hr/personnel-status/career',
          },
          {
            name: '자격사항 탭',
            id: 'HR-HA050010-T2',
            path: '/hr/personnel-status/credentials',
          },
          {
            name: '가족사항 탭',
            id: 'HR-HA050010-T3',
            path: '/hr/personnel-status/family',
          },
          {
            name: '학력사항 탭',
            id: 'HR-HA050010-T4',
            path: '/hr/personnel-status/education',
          },
          {
            name: '포상사항 탭',
            id: 'HR-HA050010-T5',
            path: '/hr/personnel-status/rewards',
          },
          {
            name: '어학사항 탭',
            id: 'HR-HA050010-T6',
            path: '/hr/personnel-status/language',
          },
          {
            name: '보훈사항 탭',
            id: 'HR-HA050010-T7',
            path: '/hr/personnel-status/veterans-affairs',
          },
          {
            name: '장애사항 탭',
            id: 'HR-HA050010-T8',
            path: '/hr/personnel-status/faults',
          },
          {
            name: '사원명부',
            id: 'HR-HA050020',
            path: '/hr/personnel-status/employees',
          },
          {
            name: '인사발령정보현황',
            id: 'HR-HA050030',
            path: '/hr/personnel-status/current-appointment',
          },
          {
            name: '승진승급인원현황',
            id: 'HR-HA050040',
            path: '/hr/personnel-status/current-promotion',
          },
          {
            name: '승진현황 탭',
            id: 'HR-HA050040-T1',
            path: '/hr/personnel-status/promotion',
          },
          {
            name: '승급현황 탭',
            id: 'HR-HA050040-T2',
            path: '/hr/personnel-status/rank',
          },
          {
            name: '인사통계현황',
            id: 'HR-HA050050',
            path: '/hr/personnel-status/statistics',
          },
          {
            name: '인사총괄정보현황',
            id: 'HR-HA050060',
            path: '/hr/personnel-status/all',
          },
          {
            name: '근무현황',
            id: 'HR-HA050070',
            path: '/hr/personnel-status/work',
          },
          {
            name: '사원근속현황',
            id: 'HR-HA050080',
            path: '/hr/personnel-status/service',
          },
          {
            name: '생일자현황',
            id: 'HR-HA050090',
            path: '/hr/personnel-status/birthday',
          },
          {
            name: '직원연령현황',
            id: 'HR-HA050100',
            path: '/hr/personnel-status/age',
          },
        ],
      },
      {
        name: '증명서관리',
        id: 'HR-HA060',
        views: [
          {
            name: '증명서신청등록',
            id: 'HR-HA060010',
            path: '/hr/certificate/registration',
          },
          {
            name: '증명서승인등록',
            id: 'HR-HA060020',
            path: '/hr/certificate/approval',
          },
          {
            name: '재직증명서',
            id: 'HR-HA060100-R1',
            path: '/hr/document/employment',
          },
          {
            name: '재직증명서(예비군용)',
            id: 'HR-HA060100-R2',
            path: '/hr/document/employment-duty',
          },
          {
            name: '경력증명서',
            id: 'HR-HA060100-R3',
            path: '/hr/document/experience',
          },
        ],
      },
      {
        name: '근무기초관리',
        id: 'HR-HC010',
        views: [
          {
            name: '근태코드등록',
            id: 'HR-HC010010',
            path: '/hr/basic-work/code-regitration',
          },
          {
            name: '근무형태현황조회',
            id: 'HR-HC010020',
            path: '/hr/basic-work/work-type',
          },
        ],
      },
      {
        name: '근무정보관리',
        id: 'HR-HC020',
        views: [
          {
            name: '근무편성표등록',
            id: 'HR-HC020010',
            path: '/hr/work-information/schedule-registration',
          },
          {
            name: '교대근무등록',
            id: 'HR-HC020020',
            path: '/hr/work-information/shift-registration',
          },
          {
            name: '초과근무확인',
            id: 'HR-HC020030',
            path: '/hr/work-information/overtime',
          },
          {
            name: '통상초과근무등록',
            id: 'HR-HC020040',
            path: '/hr/work-information/regular-overtime-registration',
          },
          {
            name: '근무시간등록',
            id: 'HR-HC020050',
            path: '/hr/work-information/working-hours-registration',
          },
          {
            name: '초과근무현황',
            id: 'HR-HC020060',
            path: '/hr/work-information/overtime-work',
          },
          {
            name: '일별근무자현황',
            id: 'HR-HC020070',
            path: '/hr/work-information/daily-worker',
          },
        ],
      },
      {
        name: '근태관리',
        id: 'HR-HC030',
        views: [
          {
            name: '개인근태등록',
            id: 'HR-HC030010',
            path: '/hr/attendance/personnel-registration',
          },
          {
            name: '부서근태등록',
            id: 'HR-HC030020',
            path: '/hr/attendance/department-registration',
          },
          {
            name: '부서근태현황',
            id: 'HR-HC030030',
            path: '/hr/attendance/current-department',
          },
          {
            name: '근무변경등록',
            id: 'HR-HC030040',
            path: '/hr/attendance/change-registration',
          },
          {
            name: '근무현황조회',
            id: 'HR-HC030050',
            path: '/hr/attendance/show',
          },
          {
            name: '발령/근태/초과근무 마감',
            id: 'HR-HC030060',
            path: '/hr/attendance/additonal',
          },
        ],
      },
      {
        name: '연차/휴가관리',
        id: 'HR-HC040',
        views: [
          {
            name: '연차생성',
            id: 'HR-HC040010',
            path: '/hr/holiday/registration',
          },
          {
            name: '연차생성조회',
            id: 'HR-HC040020',
            path: '/hr/holiday/show',
          },
          {
            name: '연차적치등록',
            id: 'HR-HC040030',
            path: '/hr/holiday/stack-regisration',
          },
          {
            name: '휴가등록',
            id: 'HR-HC040040',
            path: '/hr/holiday/vacation-registration',
          },
          {
            name: '휴가현황',
            id: 'HR-HC040050',
            path: '/hr/holiday/vacation',
          },
          {
            name: '연차사용현황',
            id: 'HR-HC040060',
            path: '/hr/holiday/list',
          },
        ],
      },
      {
        name: '출장관리',
        id: 'HR-HC050',
        views: [
          {
            name: '출장등록',
            id: 'HR-HC050010',
            path: '/hr/business-trip/registration',
          },
          {
            name: '출장현황',
            id: 'HR-HC050020',
            path: '/hr/business-trip/list',
          },
        ],
      },
      {
        name: '근태현황관리',
        id: 'HR-HC060',
        views: [
          {
            name: '근태현황조회',
            id: 'HR-HC060010',
            path: '/hr/current-attendance/current',
          },
          {
            name: '기간별근태조회',
            id: 'HR-HC060020',
            path: '/hr/current-attendance/period',
          },
          {
            name: '근태상세현황',
            id: 'HR-HC060030',
            path: '/hr/current-attendance/detail',
          },
          {
            name: '월별근무상황조회',
            id: 'HR-HC060040',
            path: '/hr/current-attendance/monthly',
          },
        ],
      },
      {
        name: '교육기초관리',
        id: 'HR-HD010',
        views: [
          {
            name: '교육코드등록',
            id: 'HR-HD010010',
            path: '/hr/basic-education/code-registration',
          },
          {
            name: '교육분류등록',
            id: 'HR-HD010020',
            path: '/hr/basic-education/classification-registration',
          },
        ],
      },
      {
        name: '교육과정관리',
        id: 'HR-HD020',
        views: [
          {
            name: '교육과정등록',
            id: 'HR-HD020010',
            path: '/hr/curriculum/registration',
          },
          {
            name: '교육대상자등록',
            id: 'HR-HD020020',
            path: '/hr/curriculum/target-registration',
          },
          {
            name: '평가항목등록',
            id: 'HR-HD020030',
            path: '/hr/curriculum/evaluation-item-registration',
          },
        ],
      },
      {
        name: '학적부관리',
        id: 'HR-HD030',
        views: [
          {
            name: '교육근태등록',
            id: 'HR-HD030010',
            path: '/hr/school-register/attendance-registration',
          },
          {
            name: '교육생성적등록',
            id: 'HR-HD030020',
            path: '/hr/school-register/registration',
          },
          {
            name: '수료처리',
            id: 'HR-HD030030',
            path: '/hr/school-register/completion',
          },
          {
            name: '학적부현황',
            id: 'HR-HD030040',
            path: '/hr/school-register/current',
          },
        ],
      },
      {
        name: '비품관리',
        id: 'HR-HE010',
        views: [
          {
            name: '비품등록',
            id: 'HR-HE010010',
            path: '/hr/equipment/registration',
          },
          {
            name: '비품입출고등록',
            id: 'HR-HE010020',
            path: '/hr/equipment/inout',
          },
          {
            name: '비품관리대장',
            id: 'HR-HE010030',
            path: '/hr/equipment/ledger',
          },
          {
            name: '비품입출고현황',
            id: 'HR-HE010040',
            path: '/hr/equipment/current-inout',
          },
        ],
      },
      {
        name: '차량관리',
        id: 'HR-HE020',
        views: [
          {
            name: '차량정보등록',
            id: 'HR-HE020010',
            path: '/hr/vehicle/information-registration',
          },
          {
            name: '차량운행등록',
            id: 'HR-HE020020',
            path: '/hr/vehicle/operation-registration',
          },
          {
            name: '차량관리대장',
            id: 'HR-HE020030',
            path: '/hr/vehicle/ledger',
          },
          {
            name: '차량운행현황',
            id: 'HR-HE020040',
            path: '/hr/vehicle/operation-detail',
          },
        ],
      },
      {
        name: '문서수발관리',
        id: 'HR-HE030',
        views: [
          {
            name: '문서수발등록',
            id: 'HR-HE030010',
            path: '/hr/document-receiving/registration',
          },
          {
            name: '문서수발관리대장',
            id: 'HR-HE030020',
            path: '/hr/document-receiving/ledger',
          },
        ],
      },
      {
        name: '당직관리',
        id: 'HR-HE040',
        views: [
          {
            name: '일직/숙직등록',
            id: 'HR-HE040010',
            path: '/hr/day-night/registration',
          },
          {
            name: '비상연락망조회',
            id: 'HR-HE040020',
            path: '/hr/day-night/emergency-contact',
          },
        ],
      },
      {
        name: '급여기초관리',
        id: 'HR-PY010',
        views: [
          {
            name: '급여코드등록',
            id: 'HR-PY010010',
            path: '/hr/salary/code',
          },
          {
            name: '급여지급변수등록',
            id: 'HR-PY010020',
            path: '/hr/salary/variable',
          },
          {
            name: '호봉표등록',
            id: 'HR-PY010030',
            path: '/hr/salary/class',
          },
          {
            name: '연봉표등록',
            id: 'HR-PY010040',
            path: '/hr/salary/annual-salary',
          },
          {
            name: '연봉대상자등록',
            id: 'HR-PY010050',
            path: '/hr/salary/annual-salary-target',
          },
          {
            name: '수당적용대상자등록',
            id: 'HR-PY010060',
            path: '/hr/salary/allowance-target',
          },
          {
            name: '자격수당 탭',
            id: 'HR-PY010060-T1',
            path: '/hr/salary/qualification',
          },
          {
            name: '직책수당 탭',
            id: 'HR-PY010060-T2',
            path: '/hr/salary/position',
          },
          {
            name: '영유아보육비 탭',
            id: 'HR-PY010060-T3',
            path: '/hr/salary/infant',
          },
          {
            name: '일반수당 탭',
            id: 'HR-PY010060-T4',
            path: '/hr/salary/general',
          },
          {
            name: '공제제외대상자등록',
            id: 'HR-PY010070',
            path: '/hr/salary/exception-target',
          },
          {
            name: '간이세액조견표',
            id: 'HR-PY010080',
            path: '/hr/salary/tax-table',
          },
          {
            name: '간이공제대상등록',
            id: 'HR-PY010090',
            path: '/hr/salary/tax-target',
          },
          {
            name: '자격증등급등록',
            id: 'HR-PY010100',
            path: '/hr/salary/certificate-grade',
          },
        ],
      },
      {
        name: '수당관리',
        id: 'HR-PY020',
        views: [
          {
            name: '초과근무조회',
            id: 'HR-PY020010',
            path: '/hr/allowance/overtime',
          },
          {
            name: '연월차수당조회',
            id: 'HR-PY020020',
            path: '/hr/allowance/annual',
          },
          {
            name: '근속수당등록',
            id: 'HR-PY020030',
            path: '/hr/allowance/service',
          },
        ],
      },
      {
        name: '급여지급관리',
        id: 'HR-PY030',
        views: [
          {
            name: '급여기본등록',
            id: 'HR-PY030010',
            path: '/hr/salary-payment/registration',
          },
          {
            name: '기본사항 탭',
            id: 'HR-PY030010-T1',
            path: '/hr/salary-payment/basics',
          },
          {
            name: '발령사항 탭',
            id: 'HR-PY030010-T2',
            path: '/hr/salary-payment/announcement',
          },
          {
            name: '가족사항 탭',
            id: 'HR-PY030010-T3',
            path: '/hr/salary-payment/family',
          },
          {
            name: '자격사항 탭',
            id: 'HR-PY030010-T4',
            path: '/hr/salary-payment/credentials',
          },
          {
            name: '학비보조 탭',
            id: 'HR-PY030010-T5',
            path: '/hr/salary-payment/tuition-assistance',
          },
          {
            name: '보험관리 탭',
            id: 'HR-PY030010-T6',
            path: '/hr/salary-payment/insurance',
          },
          {
            name: '변동급여등록',
            id: 'HR-PY030020',
            path: '/hr/salary-payment/fluctuation-registration',
          },
          {
            name: '월급여계산',
            id: 'HR-PY030030',
            path: '/hr/salary-payment/monthly-calculation',
          },
          {
            name: '급여지급내역조회',
            id: 'HR-PY030040',
            path: '/hr/salary-payment/payroll-payment-detail',
          },
          {
            name: '성과급등록',
            id: 'HR-PY030050',
            path: '/hr/salary-payment/bonus-registration',
          },
        ],
      },
      {
        name: '급여출력관리',
        id: 'HR-PY040',
        views: [
          {
            name: '급여대장(사원별)현황',
            id: 'HR-PY040010',
            path: '/hr/salary-output/employee',
          },
          {
            name: '급여대장(부서별)현황',
            id: 'HR-PY040020',
            path: '/hr/salary-output/department',
          },
          {
            name: '항목별지급/공제현황',
            id: 'HR-PY040030',
            path: '/hr/salary-output/payment-deduction',
          },
          {
            name: '자격증수당태장현황',
            id: 'HR-PY040040',
            path: '/hr/salary-output/certificate',
          },
          {
            name: '급여명세현황',
            id: 'HR-PY040050',
            path: '/hr/salary-output/wage-detail',
          },
          {
            name: '은행이체현황',
            id: 'HR-PY040060',
            path: '/hr/salary-output/bank-transfer',
          },
          {
            name: '근로소득현황',
            id: 'HR-PY040070',
            path: '/hr/salary-output/income',
          },
          {
            name: '근로소득집계현황',
            id: 'HR-PY040080',
            path: '/hr/salary-output/income-current',
          },
          {
            name: '원가기준별부서인원현황(부서별)',
            id: 'HR-PY040210',
            path: '/hr/salary-output/department-cost',
          },
          {
            name: '급여지급기준인원현황',
            id: 'HR-PY040220',
            path: '/hr/salary-output/person',
          },
          {
            name: '급여지급통계현황',
            id: 'HR-PY040230',
            path: '/hr/salary-output/statistics',
          },
        ],
      },
      {
        name: '4대보험관리',
        id: 'HR-PY050',
        views: [
          {
            name: '보험료제외항목',
            id: 'HR-PY050010',
            path: '/hr/four-major-insurance/exclude',
          },
          {
            name: '사회보험요율등록',
            id: 'HR-PY050020',
            path: '/hr/four-major-insurance/social-registration',
          },
          {
            name: '건강보험등록',
            id: 'HR-PY050030',
            path: '/hr/four-major-insurance/health-registration',
          },
          {
            name: '국민연금등록',
            id: 'HR-PY050040',
            path: '/hr/four-major-insurance/national-registration',
          },
          {
            name: '고용보험등록',
            id: 'HR-PY050050',
            path: '/hr/four-major-insurance/employment-registration',
          },
          {
            name: '보수월액현황',
            id: 'HR-PY050060',
            path: '/hr/four-major-insurance/monthly-pay',
          },
        ],
      },
      {
        name: '연말정산기초관리',
        id: 'HR-PY061',
        views: [
          {
            name: '연말정산공제기준',
            id: 'HR-PY061010',
            path: '/hr/tax-return/deduction',
          },
          {
            name: '근로소득공제율등록',
            id: 'HR-PY061020',
            path: '/hr/tax-return/deduction-rate-registration',
          },
          {
            name: '소득세율등록',
            id: 'HR-PY061030',
            path: '/hr/tax-return/incometax-rate-registration',
          },
          {
            name: '연말정산기초등록',
            id: 'HR-PY061040',
            path: '/hr/tax-return/basic-registration',
          },
          {
            name: '종전근무소득등록',
            id: 'HR-PY061050',
            path: '/hr/tax-return/previous-registration',
          },
          {
            name: '기타소득등록',
            id: 'HR-PY061060',
            path: '/hr/tax-return/other-registration',
          },
          {
            name: '연말정산기초현황',
            id: 'HR-PY061070',
            path: '/hr/tax-return/basic-current',
          },
          {
            name: '정산소득공제현황',
            id: 'HR-PY061080',
            path: '/hr/tax-return/deduction-current',
          },
        ],
      },
      {
        name: '연말정산결산관리',
        id: 'HR-PY062',
        views: [
          {
            name: '연말정산작업',
            id: 'HR-PY062010',
            path: '/hr/tax-return-result/work',
          },
          {
            name: '원천징수영수증(개별)',
            id: 'HR-PY062020',
            path: '/hr/tax-return-result/receipt',
          },
          {
            name: '원천징수영수증(일괄)',
            id: 'HR-PY062030',
            path: '/hr/tax-return-result/receipt-all',
          },
          {
            name: '전산매체작업',
            id: 'HR-PY062040',
            path: '/hr/tax-return-result/electric-work',
          },
          {
            name: '연말정산결과현황',
            id: 'HR-PY062050',
            path: '/hr/tax-return-result/result',
          },
          {
            name: '소득자료집계현황',
            id: 'HR-PY062060',
            path: '/hr/tax-return-result/income-result',
          },
          {
            name: '기부금조정',
            id: 'HR-PY062070',
            path: '/hr/tax-return-result/contribution-adjustment',
          },
        ],
      },
      {
        name: '퇴직정산관리',
        id: 'HR-PY070',
        views: [
          {
            name: '퇴직금추계',
            id: 'HR-PY070010',
            path: '/hr/retirement/judgment',
          },
          {
            name: '퇴직급여산출',
            id: 'HR-PY070020',
            path: '/hr/retirement/calculation-benefits',
          },
          {
            name: '퇴직금산출',
            id: 'HR-PY070110',
            path: '/hr/retirement/calculation',
          },
          {
            name: '퇴직연말정산',
            id: 'HR-PY070120',
            path: '/hr/retirement/tax-return',
          },
          {
            name: '퇴직금명세현황',
            id: 'HR-PY070130',
            path: '/hr/retirement/specification',
          },
          {
            name: '퇴직금지급현황',
            id: 'HR-PY070140',
            path: '/hr/retirement/payment-current',
          },
          {
            name: '퇴직급여충당금산출',
            id: 'HR-PY070210',
            path: '/hr/retirement/calculation-provisition',
          },
          {
            name: '퇴직급여충당금현황',
            id: 'HR-PY070220',
            path: '/hr/retirement/provisition-detail',
          },
        ],
      },
      {
        name: '학자금관리',
        id: 'HR-WA010',
        views: [
          {
            name: '신상등록',
            id: 'HR-WA010010',
            path: '/hr/student-finance/personal-registration',
          },
          {
            name: '대부내역등록',
            id: 'HR-WA010020',
            path: '/hr/student-finance/loan-registration',
          },
          {
            name: '대부내역현황',
            id: 'HR-WA010030',
            path: '/hr/student-finance/loan-detail',
          },
          {
            name: '상환계획등록',
            id: 'HR-WA010040',
            path: '/hr/student-finance/redemption-plan-registration',
          },
          {
            name: '월별상환대상자산출',
            id: 'HR-WA010050',
            path: '/hr/student-finance/monthly-target',
          },
          {
            name: '월별급여공제내역산출',
            id: 'HR-WA010060',
            path: '/hr/student-finance/monthly-deduction',
          },
          {
            name: '개별상환등록',
            id: 'HR-WA010070',
            path: '/hr/student-finance/repayment-registration',
          },
          {
            name: '연체이자율등록',
            id: 'HR-WA010080',
            path: '/hr/student-finance/overdue-rate-registration',
          },
          {
            name: '대부/상환내역현황',
            id: 'HR-WA010090',
            path: '/hr/student-finance/loan-repayment-detail',
          },
        ],
      },
      {
        name: '학비보조금관리',
        id: 'HR-WA020',
        views: [
          {
            name: '학비보조금신청등록',
            id: 'HR-WA020010',
            path: '/hr/tuition/registration',
          },
          {
            name: '학비보조금지급현황',
            id: 'HR-WA020020',
            path: '/hr/tuition/payment-current',
          },
          {
            name: '학비보조금현황',
            id: 'HR-WA020030',
            path: '/hr/tuition/payment-detail',
          },
        ],
      },
      {
        name: '경조비관리',
        id: 'HR-WA030',
        views: [
          {
            name: '경조코드등록',
            id: 'HR-WA030010',
            path: '/hr/family-event/code-registration',
          },
          {
            name: '경조비지급등록',
            id: 'HR-WA030020',
            path: '/hr/family-event/payment-registration',
          },
          {
            name: '경조비지급현황',
            id: 'HR-WA030030',
            path: '/hr/family-event/payment-current',
          },
        ],
      },
      {
        name: '보건관리',
        id: 'HR-WA040',
        views: [
          {
            name: '검진대상자등록',
            id: 'HR-WA040010',
            path: '/hr/health/target-registration',
          },
          {
            name: '검진정보등록',
            id: 'HR-WA040020',
            path: '/hr/health/registration',
          },
        ],
      },
      {
        name: '보고서',
        id: 'HR-HPY070',
        views: [
          {
            name: '퇴직소득원천징수영수증',
            id: 'HR-HPY070120-R1',
            path: '/hr/document/retirement',
          },
        ],
      },
    ],
  },
  {
    name: '8-재무',
    path: 'ac',
    mids: [
      {
        name: '기초정보관리',
        id: 'AC-BS010',
        views: [
          {
            name: '회계단위관리',
            id: 'AC-BS010010',
            path: '/ac/basic-information/accounting-unit',
          },
          {
            name: '계정과목관리',
            id: 'AC-BS010020',
            path: '/ac/basic-information/subject',
          },
          {
            name: '계정과목_관리항목등록',
            id: 'AC-BS010020-T1',
            path: '/ac/basic-information/subject-registration',
          },
          {
            name: '계정과목_출력순서조회',
            id: 'AC-BS010020-T2',
            path: '/ac/basic-information/subject-order',
          },
          {
            name: '계정과목_예산연결조회',
            id: 'AC-BS010020-T3',
            path: '/ac/basic-information/subject-connection',
          },
          {
            name: '계정과목_계층구조조회',
            id: 'AC-BS010020-T4',
            path: '/ac/basic-information/subject-hierarchical',
          },
          {
            name: '거래처관리',
            id: 'AC-BS010030',
            path: '/ac/basic-information/customer',
          },
          {
            name: '금융기관관리',
            id: 'AC-BS010040',
            path: '/ac/basic-information/financial-institutions',
          },
          {
            name: '계좌번호관리',
            id: 'AC-BS010050',
            path: '/ac/basic-information/account',
          },
          {
            name: '법인카드등록관리',
            id: 'AC-BS010060',
            path: '/ac/basic-information/credit-card-registration',
          },
          {
            name: '법인카드신청관리',
            id: 'AC-BS010070',
            path: '/ac/basic-information/credit-card-request',
          },
          {
            name: '자동전표항목관리',
            id: 'AC-BS010080',
            path: '/ac/basic-information/automatic-slip-item',
          },
          {
            name: '재무제표양식관리',
            id: 'AC-BS010090',
            path: '/ac/basic-information/financial-statement',
          },
        ],
      },
      {
        name: '예산기초관리',
        id: 'AC-BG010',
        views: [
          {
            name: '예산차수관리',
            id: 'AC-BG010010',
            path: '/ac/budget-basic/order',
          },
          {
            name: '예산과목관리',
            id: 'AC-BG010020',
            path: '/ac/budget-basic/subject',
          },
          {
            name: '예산세목관리',
            id: 'AC-BG010030',
            path: '/ac/budget-basic/tax',
          },
          {
            name: '예산사업관리',
            id: 'AC-BG010040',
            path: '/ac/budget-basic/project',
          },
        ],
      },
      {
        name: '예산편성관리',
        id: 'AC-BG020',
        views: [
          {
            name: '예산편성요구관리',
            id: 'AC-BG020010',
            path: '/ac/budget-planning/requirement',
          },
          {
            name: '예산편성조정관리',
            id: 'AC-BG020020',
            path: '/ac/budget-planning/coordination',
          },
          {
            name: '예산편성관리',
            id: 'AC-BG020030',
            path: '/ac/budget-planning/planning',
          },
          {
            name: '예산집행계획신청관리',
            id: 'AC-BG020040',
            path: '/ac/budget-planning/request',
          },
          {
            name: '예산집행계획승인관리',
            id: 'AC-BG020050',
            path: '/ac/budget-planning/approval',
          },
        ],
      },
      {
        name: '예산변경관리',
        id: 'AC-BG030',
        views: [
          {
            name: '예산변경신청관리',
            id: 'AC-BG030010',
            path: '/ac/budget-change/request',
          },
          {
            name: '예산변경승인관리',
            id: 'AC-BG030020',
            path: '/ac/budget-change/approval',
          },
        ],
      },
      {
        name: '예산편성및실적현황',
        id: 'AC-BG040',
        views: [
          {
            name: '예산편성요구현황',
            id: 'AC-BG040010',
            path: '/ac/budget-performance/request',
          },
          {
            name: '예산편성현황',
            id: 'AC-BG040020',
            path: '/ac/budget-performance/detail',
          },
          {
            name: '예산집행계획현황',
            id: 'AC-BG040030',
            path: '/ac/budget-performance/plan',
          },
          {
            name: '예산변경현황',
            id: 'AC-BG040040',
            path: '/ac/budget-performance/change',
          },
          {
            name: '예산실적현황',
            id: 'AC-BG040050',
            path: '/ac/budget-performance/performance',
          },
        ],
      },
      {
        name: '수입관리',
        id: 'AC-AC010',
        views: [
          {
            name: '수입결의서관리',
            id: 'AC-AC010010',
            path: '/ac/import/import',
          },
          {
            name: '회수결의서관리',
            id: 'AC-AC010020',
            path: '/ac/import/collection',
          },
          {
            name: '계좌대체결의서관리',
            id: 'AC-AC010030',
            path: '/ac/import/account-replacement',
          },
          {
            name: '기타수입결의서관리',
            id: 'AC-AC010040',
            path: '/ac/import/other-import',
          },
          {
            name: '기타회수결의서관리',
            id: 'AC-AC010050',
            path: '/ac/import/other-collection',
          },
        ],
      },
      {
        name: '지출관리',
        id: 'AC-AC020',
        views: [
          {
            name: '지출품의서관리',
            id: 'AC-AC020010',
            path: '/ac/expenditure/request',
          },
          {
            name: '지출결의서관리',
            id: 'AC-AC020020',
            path: '/ac/expenditure/resolution',
          },
          {
            name: '발의전표관리',
            id: 'AC-AC020030',
            path: '/ac/expenditure/motion-slip',
          },
          {
            name: '회계전표관리',
            id: 'AC-AC020040',
            path: '/ac/expenditure/account-slip',
          },
          {
            name: '지출품의서현황조회',
            id: 'AC-AC020050',
            path: '/ac/expenditure/request-current',
          },
          {
            name: '지출결의서현황조회',
            id: 'AC-AC020060',
            path: '/ac/expenditure/resolution-current',
          },
          {
            name: '전표현황조회',
            id: 'AC-AC020070',
            path: '/ac/expenditure/slip-current',
          },
        ],
      },
      {
        name: '마감관리',
        id: 'AC-AC030',
        views: [
          {
            name: '마감일자관리',
            id: 'AC-AC030010',
            path: '/ac/closing/date',
          },
          {
            name: '마감일자조회',
            id: 'AC-AC030020',
            path: '/ac/closing/detail',
          },
          {
            name: '계정이월관리',
            id: 'AC-AC030030',
            path: '/ac/closing/carryover',
          },
        ],
      },
      {
        name: '장부관리',
        id: 'AC-AC040',
        views: [
          {
            name: '분개장',
            id: 'AC-AC040010',
            path: '/ac/book/journal-entry',
          },
          {
            name: '일계표',
            id: 'AC-AC040020',
            path: '/ac/book/daily',
          },
          {
            name: '월계표',
            id: 'AC-AC040030',
            path: '/ac/book/monthly',
          },
          {
            name: '월별계정총괄표조회',
            id: 'AC-AC040040',
            path: '/ac/book/monthly-all',
          },
          {
            name: '합계잔액시산표',
            id: 'AC-AC040050',
            path: '/ac/book/total-table',
          },
          {
            name: '재무상태표',
            id: 'AC-AC040060',
            path: '/ac/book/financial',
          },
          {
            name: '손익계산서',
            id: 'AC-AC040070',
            path: '/ac/book/income',
          },
          {
            name: '총계정원장',
            id: 'AC-AC040080',
            path: '/ac/book/total-ledger',
          },
          {
            name: '계정원장',
            id: 'AC-AC040090',
            path: '/ac/book/ledger',
          },
        ],
      },
      {
        name: '자금계획관리',
        id: 'AC-FU010',
        views: [
          {
            name: '년자금계획신청관리',
            id: 'AC-FU010010',
            path: '/ac/fund-planning/annual-request',
          },
          {
            name: '년자금계획승인관리',
            id: 'AC-FU010020',
            path: '/ac/fund-planning/annual-approval',
          },
          {
            name: '월자금계획승인관리',
            id: 'AC-FU010030',
            path: '/ac/fund-planning/monthly-approval',
          },
          {
            name: '년자금계획현황조회',
            id: 'AC-FU010040',
            path: '/ac/fund-planning/annual-current',
          },
          {
            name: '월자금계획현황조회',
            id: 'AC-FU010050',
            path: '/ac/fund-planning/monthly-current',
          },
          {
            name: '일일현황조회',
            id: 'AC-FU010060',
            path: '/ac/fund-planning/daily',
          },
        ],
      },
      {
        name: '자금운영관리',
        id: 'AC-FU020',
        views: [
          {
            name: '예치금관리',
            id: 'AC-FU020010',
            path: '/ac/fund-operation/deposit',
          },
          {
            name: '예치금현황조회',
            id: 'AC-FU020020',
            path: '/ac/fund-operation/deposit-detail',
          },
          {
            name: '전출금관리',
            id: 'AC-FU020030',
            path: '/ac/fund-operation/transfer',
          },
          {
            name: '전출금현황조회',
            id: 'AC-FU020040',
            path: '/ac/fund-operation/transfer-current',
          },
        ],
      },
      {
        name: '차입금관리',
        id: 'AC-FU030',
        views: [
          {
            name: '차입금약정관리',
            id: 'AC-FU030010',
            path: '/ac/borrowing/agreement',
          },
          {
            name: '차입금입금관리',
            id: 'AC-FU030020',
            path: '/ac/borrowing/deposit',
          },
          {
            name: '차입금상환관리',
            id: 'AC-FU030030',
            path: '/ac/borrowing/repayment',
          },
          {
            name: '차입금현황조회',
            id: 'AC-FU030040',
            path: '/ac/borrowing/current',
          },
        ],
      },
      {
        name: '부가세관리',
        id: 'AC-TA010',
        views: [
          {
            name: '신고기본사항관리',
            id: 'AC-TA010010',
            path: '/ac/vat/basic',
          },
          {
            name: '부가세자료관리',
            id: 'AC-TA010020',
            path: '/ac/vat/data',
          },
          {
            name: '기타매입자료관리',
            id: 'AC-TA010030',
            path: '/ac/vat/other-purchase',
          },
          {
            name: '공통매입세액 안분계산',
            id: 'AC-TA010040',
            path: '/ac/vat/purchase-calculration',
          },
          {
            name: '부가세신고파일생성',
            id: 'AC-TA010050',
            path: '/ac/vat/create-file',
          },
          {
            name: '세금계산서합계표조회',
            id: 'AC-TA010060',
            path: '/ac/vat/tax-total',
          },
          {
            name: '계산서합계표조회',
            id: 'AC-TA010070',
            path: '/ac/vat/total',
          },
        ],
      },
      {
        name: '원천세관리',
        id: 'AC-TA020',
        views: [
          {
            name: '원천세자료취합등록',
            id: 'AC-TA020010',
            path: '/ac/withholding-tax/registration',
          },
          {
            name: '근무형태별급여지급내역조회',
            id: 'AC-TA020020',
            path: '/ac/withholding-tax/work-type',
          },
          {
            name: '원천세 전자신고등록',
            id: 'AC-TA020030',
            path: '/ac/withholding-tax/submit',
          },
        ],
      },
      {
        name: '법인세관리',
        id: 'AC-TA030',
        views: [
          {
            name: '접대비내역조회',
            id: 'AC-TA030010',
            path: '/ac/corporate-tax/entertain',
          },
          {
            name: '세금과공과명세조회',
            id: 'AC-TA030020',
            path: '/ac/corporate-tax/tax',
          },
        ],
      },
      {
        name: '자산관리',
        id: 'AC-AS010',
        views: [
          {
            name: '자산분류등록',
            id: 'AC-AS010010',
            path: '/ac/asset/classification',
          },
          {
            name: '자산취득관리',
            id: 'AC-AS010020',
            path: '/ac/asset/acquisition',
          },
          {
            name: '취득후지출등록',
            id: 'AC-AS010030',
            path: '/ac/asset/acquisition-after',
          },
          {
            name: '건설중인자산대체등록',
            id: 'AC-AS010040',
            path: '/ac/asset/building-replace',
          },
          {
            name: '구분지상권등록',
            id: 'AC-AS010050',
            path: '/ac/asset/superficies',
          },
          {
            name: '지산취득현황조회',
            id: 'AC-AS010060',
            path: '/ac/asset/acquisition-current',
          },
          {
            name: '유형자산명세서조회',
            id: 'AC-AS010070',
            path: '/ac/asset/tangible',
          },
          {
            name: '무형자산현황조회',
            id: 'AC-AS010080',
            path: '/ac/asset/intangible',
          },
        ],
      },
      {
        name: '감가상각관리',
        id: 'AC-AS020',
        views: [
          {
            name: '기준상각률등록',
            id: 'AC-AS020010',
            path: '/ac/depreciation/rate-registration',
          },
          {
            name: '감가상각작업',
            id: 'AC-AS020020',
            path: '/ac/depreciation/operation',
          },
          {
            name: '감가상각전표처리',
            id: 'AC-AS020030',
            path: '/ac/depreciation/slip-registration',
          },
          {
            name: '감가상각내역조회',
            id: 'AC-AS020040',
            path: '/ac/depreciation/detail',
          },
          {
            name: '감가상각총괄표조회',
            id: 'AC-AS020050',
            path: '/ac/depreciation/table',
          },
        ],
      },
      {
        name: '자산이력관리',
        id: 'AC-AS030',
        views: [
          {
            name: '자산이동신청',
            id: 'AC-AS030010',
            path: '/ac/asset-history/move-request',
          },
          {
            name: '자산이동승인',
            id: 'AC-AS030020',
            path: '/ac/asset-history/move-approval',
          },
          {
            name: '자산불용신청',
            id: 'AC-AS030030',
            path: '/ac/asset-history/nonuse-request',
          },
          {
            name: '자산불용승인',
            id: 'AC-AS030040',
            path: '/ac/asset-history/nonuse-approval',
          },
          {
            name: '자산처분신청',
            id: 'AC-AS030050',
            path: '/ac/asset-history/disposal-request',
          },
          {
            name: '자산처분승인',
            id: 'AC-AS030060',
            path: '/ac/asset-history/disposal-approval',
          },
        ],
      },
      {
        name: '기타자산관리',
        id: 'AC-AS040',
        views: [
          {
            name: '부외자산등록',
            id: 'AC-AS040010',
            path: '/ac/other-asset/otehr-registration',
          },
          {
            name: '자산실사대상등록',
            id: 'AC-AS040020',
            path: '/ac/other-asset/target-registration',
          },
          {
            name: '자산실사등록',
            id: 'AC-AS040030',
            path: '/ac/other-asset/registration',
          },
        ],
      },
      {
        name: '원가기준정보관리',
        id: 'AC-CM010',
        views: [
          {
            name: '기준코드관리',
            id: 'AC-CM010010',
            path: '/ac/cost-information/standard-code',
          },
          {
            name: '배부코드관리',
            id: 'AC-CM010020',
            path: '/ac/cost-information/distribution-code',
          },
          {
            name: '배부기준값관리',
            id: 'AC-CM010030',
            path: '/ac/cost-information/distribution-standard',
          },
          {
            name: '배부기준값조회',
            id: 'AC-CM010040',
            path: '/ac/cost-information/distribution-standard-list',
          },
        ],
      },
      {
        name: '원가계산',
        id: 'AC-CM020',
        views: [
          {
            name: '원가대상자료관리',
            id: 'AC-CM020010',
            path: '/ac/cost/data',
          },
          {
            name: '부서별원가계산',
            id: 'AC-CM020020',
            path: '/ac/cost/department-calculation',
          },
          {
            name: '원가배부내역조회',
            id: 'AC-CM020030',
            path: '/ac/cost/allocation-detail',
          },
          {
            name: '부서별원가현황',
            id: 'AC-CM020040',
            path: '/ac/cost/department',
          },
        ],
      },
    ],
  },
  {
    name: '9-자재구매',
    path: 'pm',
    mids: [
      {
        name: '물품관리',
        id: 'PM-MA010',
        views: [
          {
            name: '물품분류기준관리',
            id: 'PM-MA010010',
            path: '/pm/commodity/standard',
          },
          {
            name: '물품코드관리',
            id: 'PM-MA010020',
            path: '/pm/commodity/code',
          },
          {
            name: '물품검색(통합)',
            id: 'PM-MA010030',
            path: '/pm/commodity/search',
          },
        ],
      },
      {
        name: '창고관리',
        id: 'PM-MA020',
        views: [
          {
            name: '창고코드관리',
            id: 'PM-MA020010',
            path: '/pm/warehouse/code',
          },
        ],
      },
      {
        name: '거래처별단가관리',
        id: 'PM-MA030',
        views: [
          {
            name: '거래처별단가관리',
            id: 'PM-MA030020',
            path: '/pm/unit-price-by-client/detail',
          },
          {
            name: '거래처별단가현황',
            id: 'PM-MA030040',
            path: '/pm/unit-price-by-client/current',
          },
        ],
      },
      {
        name: '안전재고관리',
        id: 'PM-MA040',
        views: [
          {
            name: '팀별안전재고관리',
            id: 'PM-MA040010',
            path: '/pm/safety-inventory/detail',
          },
          {
            name: '팀별안전재고현황',
            id: 'PM-MA040020',
            path: '/pm/safety-inventory/current',
          },
        ],
      },
      {
        name: '정수물품책정관리',
        id: 'PM-MA050',
        views: [
          {
            name: '정수물품책정관리',
            id: 'PM-MA050010',
            path: '/pm/item-policy/detail',
          },
          {
            name: '정수물품책정현황',
            id: 'PM-MA050020',
            path: '/pm/item-policy/current',
          },
        ],
      },
      {
        name: '수급계획관리',
        id: 'PM-MB010',
        views: [
          {
            name: '물품수급계획관리',
            id: 'PM-MB010010',
            path: '/pm/supply-demand-plan/detail',
          },
          {
            name: '물품수급계획변경관리',
            id: 'PM-MB010020',
            path: '/pm/supply-demand-plan/change',
          },
          {
            name: '물품수급계획변경차수별현황',
            id: 'PM-MB010050',
            path: '/pm/supply-demand-plan/change-current',
          },
          {
            name: '물품수급계획실적현황',
            id: 'PM-MB010060',
            path: '/pm/supply-demand-plan/performance',
          },
        ],
      },
      {
        name: '물품구매관리',
        id: 'PM-MB020',
        views: [
          {
            name: '구매신청관리',
            id: 'PM-MB020010',
            path: '/pm/commodity-purchase/application',
          },
          {
            name: '구매의뢰관리',
            id: 'PM-MB020020',
            path: '/pm/commodity-purchase/request',
          },
          {
            name: '구매진척현황',
            id: 'PM-MB020060',
            path: '/pm/commodity-purchase/progress',
          },
        ],
      },
      {
        name: '납품지시관리',
        id: 'PM-MB030',
        views: [
          {
            name: '납품지시관리',
            id: 'PM-MB030010',
            path: '/pm/delivery-instruction/detail',
          },
          {
            name: '납품지시현황',
            id: 'PM-MB030020',
            path: '/pm/delivery-instruction/current',
          },
        ],
      },
      {
        name: '검수관리',
        id: 'PM-MB040',
        views: [
          {
            name: '검수입고관리',
            id: 'PM-MB040010',
            path: '/pm/inspection/stock',
          },
          {
            name: '기타검수입고 관리',
            id: 'PM-MB040020',
            path: '/pm/inspection/other-stock',
          },
          {
            name: '물품검수보고서관리',
            id: 'PM-MB030030',
            path: '/pm/inspection/report',
          },
          {
            name: '검수입고현황',
            id: 'PM-MB030040',
            path: '/pm/inspection/stock-current',
          },
          {
            name: '미검수입고현황',
            id: 'PM-MB030050',
            path: '/pm/inspection/non-current',
          },
        ],
      },
      {
        name: '출납지시관리',
        id: 'PM-MB050',
        views: [
          {
            name: '출납지시관리',
            id: 'PM-MB050010',
            path: '/pm/accounting-instructions/detail',
          },
          {
            name: 'Serial 고유번호관리',
            id: 'PM-MB050020',
            path: '/pm/accounting-instructions/serial-code',
          },
          {
            name: '출납지시현황',
            id: 'PM-MB050030',
            path: '/pm/accounting-instructions/current',
          },
        ],
      },
      {
        name: '수입관리',
        id: 'PM-MC010',
        views: [
          {
            name: '수입관리',
            id: 'PM-MC010010',
            path: '/pm/import/detail',
          },
          {
            name: '기타/계정변경입고관리',
            id: 'PM-MC010020',
            path: '/pm/import/other',
          },
          {
            name: '수입현황',
            id: 'PM-MC010030',
            path: '/pm/import/current',
          },
          {
            name: '기타입고현황',
            id: 'PM-MC010040',
            path: '/pm/import/other-current',
          },
          {
            name: '부서별계정변경현황',
            id: 'PM-MC010050',
            path: '/pm/import/department',
          },
        ],
      },
      {
        name: '자재청구관리',
        id: 'PM-MC020',
        views: [
          {
            name: '자재청구관리',
            id: 'PM-MC020010',
            path: '/pm/material-claim/detail',
          },
          {
            name: '창고지정관리',
            id: 'PM-MC020020',
            path: '/pm/material-claim/warehouse',
          },
          {
            name: '청구승인관리',
            id: 'PM-MC020030',
            path: '/pm/material-claim/approval',
          },
          {
            name: '작업진행상태현황(접수부서별)',
            id: 'PM-MC020040',
            path: '/pm/material-claim/progress',
          },
        ],
      },
      {
        name: '불출관리',
        id: 'PM-MC030',
        views: [
          {
            name: '불출관리',
            id: 'PM-MC030010',
            path: '/pm/discharge/detail',
          },
          {
            name: '자재사용실적현황',
            id: 'PM-MC030020',
            path: '/pm/discharge/performance-current',
          },
        ],
      },
      {
        name: '자재이동/관리전환관리',
        id: 'PM-MC040',
        views: [
          {
            name: '관리전환승인관리',
            id: 'PM-MC040030',
            path: '/pm/material-manage/approval',
          },
          {
            name: '자재이동/관리전환출고관리',
            id: 'PM-MC040010',
            path: '/pm/material-manage/forwarding',
          },
          {
            name: '자재이동/관리전환입고관리',
            id: 'PM-MC040020',
            path: '/pm/material-manage/stock',
          },
        ],
      },
      {
        name: '반납입고관리',
        id: 'PM-MC050',
        views: [
          {
            name: '반납입고관리',
            id: 'PM-MC050010',
            path: '/pm/return-receiving/detail',
          },
          {
            name: '부서별반납입고현황',
            id: 'PM-MC050020',
            path: '/pm/return-receiving/current',
          },
        ],
      },
      {
        name: '불용품관리',
        id: 'PM-MC060',
        views: [
          {
            name: '불용품반납출고관리',
            id: 'PM-MC060010',
            path: '/pm/disused-goods/forwarding',
          },
          {
            name: '불용품입고관리',
            id: 'PM-MC060020',
            path: '/pm/disused-goods/stock',
          },
          {
            name: '불용품처리출고관리',
            id: 'PM-MC060030',
            path: '/pm/disused-goods/progress-forwarding',
          },
          {
            name: '불용품처리현황',
            id: 'PM-MC060040',
            path: '/pm/disused-goods/progress-current',
          },
        ],
      },
      {
        name: '외주수리/대여관리',
        id: 'PM-MC070',
        views: [
          {
            name: '외주수리/대여불출관리',
            id: 'PM-MC070010',
            path: '/pm/outsourcing-repair-rental/discharge',
          },
          {
            name: '외주수리/대여입고관리',
            id: 'PM-MC070020',
            path: '/pm/outsourcing-repair-rental/stock',
          },
          {
            name: '부서별외주수리/대여불출현황',
            id: 'PM-MC070030',
            path: '/pm/outsourcing-repair-rental/discharge-current',
          },
          {
            name: '부서별외주수리/대여 입고현황',
            id: 'PM-MC070040',
            path: '/pm/outsourcing-repair-rental/stock-current',
          },
          {
            name: '부서별외주수리/대여 미입고현황',
            id: 'PM-MC070050',
            path: '/pm/outsourcing-repair-rental/nonstock-current',
          },
        ],
      },
      {
        name: '손망실관리',
        id: 'PM-MC080',
        views: [
          {
            name: '손망실관리',
            id: 'PM-MC080010',
            path: '/pm/loss/detail',
          },
          {
            name: '부서별손망실현황',
            id: 'PM-MC080020',
            path: '/pm/loss/current',
          },
        ],
      },
      {
        name: '각종수불현황',
        id: 'PM-MC090',
        views: [
          {
            name: '부서별이동입고현황',
            id: 'PM-MC090040',
            path: '/pm/supply-status/department-stock',
          },
          {
            name: '부서별이동미입고현황',
            id: 'PM-MC090050',
            path: '/pm/supply-status/department-nonstock',
          },
          {
            name: '이력관리',
            id: 'PM-MC090010',
            path: '/pm/supply-status/history',
          },
          {
            name: '이력물품현황',
            id: 'PM-MC090020',
            path: '/pm/supply-status/history-current',
          },
          {
            name: '이력물품별수불이력현황',
            id: 'PM-MC090030',
            path: '/pm/supply-status/item-history',
          },
          {
            name: '수입현황(총괄)',
            id: 'PM-MC090110',
            path: '/pm/supply-status/import-general',
          },
          {
            name: '불출현황(총괄)',
            id: 'PM-MC090120',
            path: '/pm/supply-status/discharge-general',
          },
          {
            name: '물품별수불현황',
            id: 'PM-MC090130',
            path: '/pm/supply-status/supply-item',
          },
        ],
      },
      {
        name: '실사재고관리',
        id: 'PM-MD010',
        views: [
          {
            name: '재고현황(재물조사)',
            id: 'PM-MD010050',
            path: '/pm/actual-inventory/current',
          },
          {
            name: '재고실사관리',
            id: 'PM-MD010010',
            path: '/pm/actual-inventory/real',
          },
          {
            name: '재고조정신청관리',
            id: 'PM-MD010020',
            path: '/pm/actual-inventory/request',
          },
          {
            name: '재고조정신청승인',
            id: 'PM-MD010030',
            path: '/pm/actual-inventory/approval',
          },
          {
            name: '재고조정관리 (과부족분)',
            id: 'PM-MD010040',
            path: '/pm/actual-inventory/managing',
          },
          {
            name: '재물조사현황',
            id: 'PM-MD010080',
            path: '/pm/actual-inventory/investigation-current',
          },
        ],
      },
      {
        name: '각종재고현황',
        id: 'PM-MD020',
        views: [
          {
            name: '재고현황(총괄)',
            id: 'PM-MD020010',
            path: '/pm/inventory-status/total',
          },
          {
            name: '부서별실재고현황',
            id: 'PM-MD020020',
            path: '/pm/inventory-status/department',
          },
          {
            name: '물품별창고별재고현황',
            id: 'PM-MD020030',
            path: '/pm/inventory-status/wearhouse',
          },
        ],
      },
      {
        name: '월마감작업',
        id: 'PM-ME010',
        views: [
          {
            name: '불출단가적용',
            id: 'PM-ME010010',
            path: '/pm/monthly-closingwork/pricing',
          },
          {
            name: '월별재고이월(마감)',
            id: 'PM-ME010020',
            path: '/pm/monthly-closingwork/forwarding',
          },
          {
            name: '마감전표관리',
            id: 'PM-ME010030',
            path: '/pm/monthly-closingwork/closing-slip',
          },
        ],
      },
      {
        name: '각종결산현황',
        id: 'PM-ME020',
        views: [
          {
            name: '재고검증현황',
            id: 'PM-ME020020',
            path: '/pm/settlement-status/inventory-verification',
          },
          {
            name: '재고자산명세서',
            id: 'PM-ME020030',
            path: '/pm/settlement-status/inventory-settlement',
          },
          {
            name: '재고자산활용률',
            id: 'PM-ME020040',
            path: '/pm/settlement-status/inventory-rate',
          },
        ],
      },
      {
        name: '각종통계현황',
        id: 'PM-MF010',
        views: [
          {
            name: '부서별정수배정현황',
            id: 'PM-MF010010',
            path: '/pm/settlement-status/department-allocation',
          },
          {
            name: '부서별안전재고현황',
            id: 'PM-MF010020',
            path: '/pm/settlement-status/department-safety-inventory',
          },
        ],
      },
    ],
  },
];
export default banana;
