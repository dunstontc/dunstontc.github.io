module.exports = [
  {
    id     : 'pug-svg',
    title  : 'Pug',
    link   : 'https://pugjs.org/api/getting-started.html', // style="transform: translate(20%);"
    content: `
      <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 2500 2500">
        <path d="M2097.66,994.14c-3.91-85.94,7.81-162.11-31.25-226.56-93.75-160.16-328.13-253.91-796.88-253.91v13.67h0V513.67c-468.75,0-714.84,93.75-808.59,255.86-37.11,66.41-33.2,140.63-39.06,226.56-3.91,68.36-35.16,140.63-21.48,218.75C416,1316.41,421.87,1418,437.5,1511.72c11.72,76.17,117.19,140.62,127,212.89,27.34,199.22,234.38,291,703.12,291v15.63h2v-15.63c468.75,0,668-91.8,693.36-291,9.77-74.22,107.42-136.72,119.14-212.89,15.63-93.75,21.48-195.31,37.11-296.88,13.67-78.12-17.58-152.34-21.48-220.7Z" fill="#efcca3"/>
        <path d="M1261.72,1064.45c84,2,142.58,54.69,197.27,103.52,64.45,56.64,173.83,95.7,218.75,144.53s103.52,97.66,125,173.83,27.34,173.83,27.34,199.22,13.67,19.53,52.73,0c91.8-44.92,193.36-166,193.36-166-11.72,76.17-111.33,144.53-121.09,216.8-23.44,199.22-216.8,294.92-695.31,294.92h9.77" fill="#ccac8d"/>
        <path d="M1570.31,912.11c17.58,60.55,80.08,265.63-41,197.27,0,0,50.78,29.3,82,140.62,33.2,111.33,113.28,125,113.28,125s130.86,25.39,228.52-58.59c82-70.31,95.7-195.31,60.55-291-35.16-93.75-97.66-123-189.45-142.58C1732.42,861.33,1548.83,843.75,1570.31,912.11Z" fill="#ccac8d"/>
        <circle cx="1802.73" cy="1134.77" r="171.88"/>
        <circle cx="1757.81" cy="1058.59" r="44.92" fill="#fff"/>
        <path d="M1541,1127s154.3,105.47,238.28,209,82,123,82,123l-60.55,27.34s-85.94-162.11-191.41-222.66c-107.42-60.55-119.14-111.33-119.14-111.33L1541,1127Z" fill="#efcca3"/>
        <path d="M1267.58,1064.45c-84,2-146.48,54.69-203.13,103.52-64.45,56.64-177.73,95.7-222.66,144.53s-105.47,97.66-127,173.83-29.3,173.83-29.3,199.22,3.91,27.34-52.73,0c-91.8-43-193.36-166-193.36-166,11.72,76.17,111.33,144.53,121.09,216.8,27.34,199.22,220.7,294.92,699.22,294.92h9.77" fill="#ccac8d"/>
        <path d="M1720.7,1394.53c-93.75-115.23-244.14-222.66-453.12-222.66h-2c-209,0-359.38,107.42-453.13,222.66-97.66,119.14-89.84,166-89.84,279.3,0,410.16,144.53,293,240.23,343.75,97.66,48.83,199.22,33.2,302.73,33.2h2c105.47,0,205.08,13.67,302.73-35.16,95.7-48.83,240.23,72.27,240.23-337.89,2-113.28,7.81-164.06-89.84-283.2Z" fill="#56332b"/>
        <path d="M1257.81,1273.44s-13.67,189.45-41,226.56l50.78-11.72Z" fill="#442823"/>
        <path d="M1271.48,1273.44s13.67,189.45,41,226.56l-50.78-11.72Z" fill="#442823"/>
        <path d="M1107.42,1228.52c-19.53-44.92,50.78-117.19,162.11-119.14,111.33,0,181.64,72.27,162.11,119.14s-89.84,60.55-162.11,62.5c-70.31-2-142.58-15.63-162.11-62.5Z" fill="#56332b"/>
        <path d="M1269.53,1273.44c0-7.81,66.41-9.77,101.56-33.2,0,0-72.27,23.44-87.89,13.67-15.63-7.81-19.53-31.25-19.53-31.25s-5.86,23.44-17.58,31.25c-13.67,7.81-95.7-13.67-95.7-13.67s109.37,27.34,109.37,33.2-2,25.39-2,39.06c0,48.83,0,169.92,7.81,179.69,11.72,17.58,7.81-130.86,7.81-179.69C1271.48,1296.87,1271.48,1281.25,1269.53,1273.44Z"/>
        <path d="M1273.44,1535.16c33.2,0,91.8,23.44,144.53,60.55-50.78-56.64-111.33-95.7-144.53-95.7-35.16,0-109.37,43-162.11,105.47C1166,1562.5,1236.33,1535.16,1273.44,1535.16Z" fill="#7f4a41"/>
        <path d="M1259.77,1880.86c-74.22,0-146.48-23.44-212.89-41-13.67-3.91-27.34,5.86-41,2-123-39.06-222.66-105.47-283.2-189.45v19.53c0,410.16,144.53,294.92,240.23,343.75,97.66,48.83,199.22,33.2,302.73,33.2h2c105.47,0,205.08,13.67,302.73-35.16,95.7-48.83,240.23,70.31,240.23-339.84,0-15.63,0-31.25,2-44.92-56.64,91.8-160.16,164.06-289.06,207-11.72,3.91-39.06-5.86-50.78-3.91-70.31,23.44-132.81,48.83-212.89,48.83Z" fill="#442823"/>
        <path d="M1074.22,1660.16s-48.83,146.48-15.62,210.94l-44.92-19.53S1046.88,1703.13,1074.22,1660.16Zm386.72,0s48.83,146.48,15.63,210.94l44.92-19.53s-35.16-148.44-60.55-191.41Z" fill="#442823"/>
        <path d="M949.22,912.11c-17.58,60.55-80.08,265.63,41,197.27,0,0-50.78,29.3-82,140.62s-113.28,125-113.28,125-130.86,25.39-228.52-58.59c-82-70.31-95.7-195.31-60.55-291s97.66-123,189.45-142.58c91.8-21.48,273.44-39.06,253.91,29.3Z" fill="#ccac8d"/>
        <path d="M1267.58,1500c52.73,0,216.8,113.28,218.75,252v-7.81c0-144.53-132.81-259.77-218.75-259.77s-218.75,117.19-218.75,259.77V1752C1050.78,1613.28,1214.84,1500,1267.58,1500Z"/>
        <ellipse cx="1302.9" cy="1201.21" rx="15.63" ry="29.3" transform="translate(-258.75 363.53) rotate(-14.47)" fill="#331712"/>
        <ellipse cx="1218.5" cy="1201.31" rx="29.3" ry="15.62" transform="translate(-289.89 2009.16) rotate(-72.76)" fill="#331712"/>
        <circle cx="726.56" cy="1134.77" r="171.88"/>
        <circle cx="771.48" cy="1058.59" r="44.92" fill="#fff"/>
        <path d="M1318.36,1136.72c0-2-44.92,19.53-56.64,21.48-11.72-2-56.64-23.44-56.64-21.48Z" fill="#7f4a41"/>
        <path d="M976.56,1127s-154.3,105.47-238.28,209-82,123-82,123l60.55,27.34s85.94-162.11,191.41-222.66,119.14-111.33,119.14-111.33Z" fill="#efcca3"/>
        <path d="M638.67,814.45S585.94,959,468.75,1019.53C468.75,1019.53,652.34,998,638.67,814.45Zm1232.42,0S1923.83,959,2041,1019.53C2041,1019.53,1857.42,998,1871.09,814.45Zm-334,269.53s-115.23-121.09-269.53-125h3.91C1115.23,962.89,1002,1084,1002,1084c134.77-93.75,250-91.8,269.53-91.8-2,0,130.86-2,265.62,91.8ZM1402.34,830.08s-58.59-82-136.72-84h3.91c-58.59,2-134.77,84-134.77,84,66.41-64.45,134.77-62.5,134.77-62.5S1334,765.63,1402.34,830.08ZM726.56,1429.69s-91.8,44.92-158.2,17.58h-2c-58.59-33.2-87.89-132.81-87.89-132.81S537.11,1490.23,726.56,1429.69Zm1070.31,0s91.8,44.92,158.2,17.58c78.13-33.2,89.84-132.81,89.84-132.81S1986.33,1490.23,1796.88,1429.69Z" fill="#ccac8d"/>
        <path d="M832,804.69c50.78-9.77,134.77-11.72,201.17,9.77,84,29.3,15.62,136.72,33.2,142.58s41-74.22,197.27-66.41c158.2,7.81,175.78,78.13,197.27,66.41s-21.48-195.31,214.84-152.34c0,0-248-66.41-236.33,113.28,0,0-142.58-109.37-341.8-11.72C1099.61,906.25,1150.39,738.28,832,804.69Zm865.23,0c3.91,0,5.86,2,7.81,2S1703.13,804.69,1697.27,804.69ZM763.67,564.45S552.73,830.08,521.48,931.64c-31.25,103.52-54.69,527.34-82,587.89l-97.66-418L521.48,666,763.67,564.45Zm992.19,0S1966.8,830.08,1998,931.64c31.25,103.52,54.69,527.34,82,587.89l97.66-418L1998,666,1755.86,564.45Z" fill="#ccac8d"/>
        <path d="M1746.09,564.45s226.56,189.45,293,408.2,39.06,484.37,89.84,517.58c72.27,46.88,154.3-232.42,181.64-261.72,43-46.88,185.55-166,195.31-187.5S2216.8,693.36,2085.94,628.91c-158.2-74.22-353.52-80.08-339.84-64.45Z" fill="#56332b"/>
        <path d="M1939.45,681.64s267.58,341.8,263.67,767.58l107.42-218.75c-2,0-95.7-279.3-371.09-548.83Z" fill="#442823"/>
        <path d="M763.67,564.45s-226.56,189.45-293,408.2S431.64,1457,380.86,1490.23c-72.27,46.88-154.3-232.42-181.64-261.72-43-46.88-185.55-166-195.31-187.5S293,693.36,423.83,628.91c158.2-74.22,353.52-80.08,339.84-64.45Z" fill="#56332b"/>
        <path d="M570.31,681.64s-267.58,341.8-263.67,767.58L201.17,1230.47S294.92,951.17,570.31,681.64Z" fill="#442823"/>
        <path d="M425.78,1457s19.53,105.47,50.78,138.67,9.77-25.39,9.77-25.39S453.12,1552.73,459,1418s-33.2,39.06-33.2,39.06Zm1666,0S2072.27,1562.5,2041,1595.7s-9.77-25.39-9.77-25.39,33.2-17.58,27.34-152.34,33.2,39.06,33.2,39.06Z" fill="#ccac8d"/>
        <g>
          <circle cx="1064.45" cy="1376.95" r="15.63" fill="#442823"/>
          <circle cx="974.61" cy="1470.7" r="15.63" fill="#442823"/>
          <circle cx="945.31" cy="1376.95" r="15.63" fill="#442823"/>
        </g>
        <g>
          <circle cx="1445.31" cy="1376.95" r="15.63" fill="#442823"/>
          <circle cx="1535.16" cy="1470.7" r="15.63" fill="#442823"/>
          <circle cx="1564.45" cy="1376.95" r="15.63" fill="#442823"/>
        </g>
      </svg>
    `,
  },
];
