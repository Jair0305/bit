"use client";

import {
  Settings,
  Users,
  Wrench,
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  Shield,
  HelpCircle,
  Cable,
  GraduationCap,
  Ruler
} from "lucide-react";
import { useRef } from "react";

export default function Home() {
  const contactRef = useRef<HTMLDivElement>(null);
  return (
      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="relative h-[600px] flex items-center justify-center">
          <div className="absolute inset-0 z-0">
            <img
                src="/hero-image.jpg"
                alt="Industrial Background"
                className="w-full h-full object-cover brightness-50"
            />
          </div>
          <div className="container mx-auto px-4 z-10 text-white text-center">
            <h1 className="text-5xl font-bold mb-6">Bajio Industrial Tools</h1>
            <p className="text-xl max-w-3xl mx-auto">
              Soluciones técnicas industriales de alta calidad con más de 10 años de experiencia
            </p>
          </div>
        </section>

        {/* About Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">¿Quiénes somos?</h2>
              <div className="flex items-start gap-8 flex-wrap md:flex-nowrap">
                <div className="flex-1 min-w-[300px]">
                  <div className="bg-blue-50 p-6 rounded-lg">
                    <Users className="w-12 h-12 text-blue-600 mb-4" />
                    <p className="text-gray-700">
                      BIT es un proveedor industrial con amplia experiencia en el área de
                      mantenimiento, calidad y manufactura conformada por personal
                      experimentado en herramientas, controladores y software Atlas Copco.
                    </p>
                  </div>
                </div>
                <div className="flex-1 min-w-[300px]">
                  <div className="bg-blue-50 p-6 rounded-lg">
                    <Settings className="w-12 h-12 text-blue-600 mb-4" />
                    <p className="text-gray-700">
                      Contamos con más de 10 años de experiencia brindando servicios a
                      compañías como General Motors, Honda de México, Ford, Mazda,
                      Mercedes Benz, BRP, Eaton, Cummins, entre otras.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">Nuestros Servicios</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {services.map((service, index) => (
                  <div
                      key={index}
                      className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
                  >
                    <div className="flex items-center mb-4">
                      {service.icon}
                      <h3 className="font-semibold text-lg text-gray-900">{service.title}</h3>
                    </div>
                    <p className="text-gray-600">{service.description}</p>
                  </div>
              ))}
            </div>
          </div>
        </section>

        {/* Expertise Section */}
        <section className="py-20 bg-blue-600 text-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Nuestra Experiencia</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <div className="flex items-start space-x-4">
                <Wrench className="w-6 h-6 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-xl mb-2">Mantenimiento Especializado</h3>
                  <p>
                    Ofrecemos servicios de mantenimiento preventivo y correctivo para
                    equipos Atlas Copco, respaldados por nuestro equipo técnico altamente
                    capacitado.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <Settings className="w-6 h-6 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-xl mb-2">Soporte Técnico</h3>
                  <p>
                    Brindamos asesoría, soporte y programación de equipos Atlas Copco,
                    tanto en sitio como de manera remota.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6 text-gray-900">¿Necesitas nuestros servicios?</h2>
            <p className="text-xl text-gray-600 mb-8">
              Ofrecemos diagnósticos sin costo para equipos Atlas Copco
            </p>
          </div>
        </section>

        {/* Footer / Contact Section */}
        <footer ref={contactRef} className="bg-gray-900 text-white py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-8">Contáctanos</h2>
              <p className="text-gray-300 mb-8">
                Síguenos en nuestras redes sociales para mantenerte actualizado sobre nuestros servicios
              </p>
              <div className="flex justify-center space-x-6">
                <a
                    href="https://facebook.com/BIT"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-blue-400 transition-colors p-2"
                >
                  <Facebook className="w-8 h-8" />
                </a>
                <a
                    href="https://instagram.com/BIT"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-pink-400 transition-colors p-2"
                >
                  <Instagram className="w-8 h-8" />
                </a>
                <a
                    href="https://linkedin.com/company/BIT"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-blue-300 transition-colors p-2"
                >
                  <Linkedin className="w-8 h-8" />
                </a>
                <a
                    href="mailto:betsabe.valdez@bajioitols.com"
                    className="hover:text-blue-300 transition-colors p-2"
                >
                  <Mail className="w-8 h-8" />
                </a>
              </div>
              <div className="mt-8 text-gray-400">
                <p>Email: betsabe.valdez@bajioitols.com</p>
                <p className="mt-2">© 2024 Bajio Industrial Tools. Todos los derechos reservados.</p>
              </div>
            </div>
          </div>
        </footer>
      </main>
  );
}

const services = [
  {
    icon: <Shield className="w-6 h-6 text-blue-600 mr-2" />,
    title: "Mantenimiento Preventivo",
    description: "Servicio especializado para equipos Atlas Copco",
  },
  {
    icon: <Wrench className="w-6 h-6 text-blue-600 mr-2" />,
    title: "Mantenimiento Correctivo",
    description: "Soluciones efectivas para equipos Atlas Copco",
  },
  {
    icon: <HelpCircle className="w-6 h-6 text-blue-600 mr-2" />,
    title: "Asesoría y Soporte",
    description: "Programación de equipos Atlas Copco en sitio y remoto",
  },
  {
    icon: <Cable className="w-6 h-6 text-blue-600 mr-2" />,
    title: "Integraciones",
    description: "Soporte para integraciones con estaciones controladas por PLC",
  },
  {
    icon: <GraduationCap className="w-6 h-6 text-blue-600 mr-2" />,
    title: "Capacitación",
    description: "Cursos personalizados en sistemas Atlas Copco",
  },
  {
    icon: <Ruler className="w-6 h-6 text-blue-600 mr-2" />,
    title: "Calibración",
    description: "Calibración de herramientas de torque con acreditación PERRY JOHNSON",
  },
];
