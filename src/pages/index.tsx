import styles from './index.less';
import { Button } from 'antd';
import { useEffect } from 'react';

export default function IndexPage() {
  useEffect(() => {
    if (PerformanceObserver.supportedEntryTypes.includes("paint")) {
      const observer = new PerformanceObserver((list) => {
        const entries = list.getEntriesByName('first-contentful-paint');
        if (entries.length > 0) {
          const fcpEntry = entries[0];
          console.log('FCP:', fcpEntry.startTime);
          // 你可以将 FCP 数据发送到你的后端或分析工具
        }
      });

      observer.observe({ type: 'paint', buffered: true });
    }
  }, []);

  return (
    <>
      <Button>hhh</Button>
    </>
  );
}
