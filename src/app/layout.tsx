import type { Metadata } from 'next';
import Link from 'next/link';
import { BookOpen, ArrowUpRight } from 'lucide-react';
import './globals.css';
export const metadata:Metadata={title:{default:'Entre líneas — Historias que dejan huella',template:'%s · Entre líneas'},description:'Un laboratorio de lectura: seis voces, veinticuatro relatos y nuevas maneras de mirar el mundo.'};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="es"><body><a className="skip" href="#main">Saltar al contenido</a><header className="nav"><Link href="/" className="brand"><BookOpen size={24}/> entre<span>líneas</span><i/></Link><nav aria-label="Principal"><Link href="/#biblioteca">Biblioteca</Link><Link href="/#equipo">El equipo</Link><Link href="/#calendario">Calendario</Link></nav><a className="nav-cta" href="/#biblioteca">Explorar relatos <ArrowUpRight size={16}/></a></header>{children}<footer><Link href="/" className="brand">entre<span>líneas</span><i/></Link><p>Seis voces. Un universo de historias.<br/>Taller de Ingeniería de Software · ITP · 2026</p><span>Hecho para leer. Diseñado para sentir.</span></footer></body></html>}
