"use client"
import Image from 'next/image';
import React from 'react';

const LogoCarousel = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-transparent to-black/10 pb-16">
      <div className="flex flex-col gap-4 relative">
        {/* Fade overlay elements */}
        <div className="absolute top-0 left-0 w-52 h-full z-10 bg-gradient-to-r from-white to-transparent" />
        <div className="absolute top-0 right-0 w-52 h-full z-10 bg-gradient-to-l from-white to-transparent" />
        
        {/* Scrolling Track */}
        <div className="relative flex w-full overflow-hidden">
          <div className="flex w-max animate-marquee space-x-4">
            {logos.concat(logos).map((logo, index) => (
              <Image key={index} src={logo.src} alt={logo.alt} width={80} height={80} className="h-20 w-20 object-contain grayscale-[10%] brightness-80 opacity-70 transition-all duration-300 hover:grayscale-0 hover:brightness-100 hover:opacity-100 hover:scale-110" />
            ))}
          </div>
        </div>
        
        {/* Reverse Scrolling Track */}
        <div className="relative flex w-full overflow-hidden">
          <div className="flex w-max animate-marquee-reverse space-x-4">
            {logos.concat(logos).map((logo, index) => (
              <Image key={`reverse-${index}`} src={logo.src} alt={logo.alt} width={80} height={80} className="h-20 w-20 object-contain grayscale-[10%] brightness-80 opacity-70 transition-all duration-300 hover:grayscale-0 hover:brightness-100 hover:opacity-100 hover:scale-110" />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const logos = [
  { src: '/assets/images/postgres-square.png', alt: 'Postgres Logo' },
  { src: '/assets/images/duckdb-square.png', alt: 'DuckDB Logo' },
  { src: '/assets/images/peliqan-square.png', alt: 'Peliqan Logo' },
  { src: '/assets/images/linkedin-square.png', alt: 'LinkedIn Logo' },
  { src: '/assets/images/airtable-square.png', alt: 'Airtable Logo' },
  { src: '/assets/images/snowflake-square.png', alt: 'Snowflake Logo' },
  { src: '/assets/images/dynmodb-square.png', alt: 'DynamoDB Logo' },
  { src: '/assets/images/csv-square.png', alt: 'CSV Logo' },
  { src: '/assets/images/sqlite-square.png', alt: 'SQLite Logo' },
  { src: '/assets/images/bigquery-square.png', alt: 'BigQuery Logo' },
  { src: '/assets/images/mongodb-square.png', alt: 'MongoDB Logo' },
  { src: '/assets/images/motherduck-square.png', alt: 'Motherduck Logo' },
  { src: '/assets/images/clickhouse-square.png', alt: 'ClickHouse Logo' },
  { src: '/assets/images/excel-square.png', alt: 'Excel Logo' },
  { src: '/assets/images/mysql-square.png', alt: 'MySQL Logo' },
  { src: '/assets/images/supabase-square.png', alt: 'Supabase Logo' },
  { src: '/assets/images/sheets-square.png', alt: 'Sheets Logo' },
  { src: '/assets/images/salesforce-square.png', alt: 'Salesforce Logo' }
];

export default LogoCarousel;
