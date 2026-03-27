import Image from "next/image";
import { getTranslations } from 'next-intl/server'

export async function Footer() {
  const t = await getTranslations('footer')

  return (
    <footer className="bg-v-faded py-12">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Logo and Company Details */}
        <div className="flex flex-col lg:flex-row justify-between mb-8">
          {/* Logo and Legal Info */}
          <div className="flex flex-col items-start">
            <div className="flex items-center mb-6">
              <Image
                src="/vservice-logo.svg"
                alt="V.Service Logo"
                width={150}
                height={50}
              />
            </div>
            <ul className="text-v-dark text-sm space-y-3">
              <li>P.IVA 05881731003</li>
              <li>URI: ROMA</li>
              <li>REA 933501 Cap.Soc. 100.000€</li>
            </ul>
          </div>

          {/* Contact Section */}
          <div className="flex flex-col items-start lg:mx-16">
            <h3 className="text-lg font-semibold text-v-dark mb-6">{t('contactsTitle')}</h3>
            <ul className="text-v-dark text-sm space-y-3">
              <li className="flex items-center space-x-2">
                <Image src="/marker-pin.svg" alt="Location" width={16} height={16} />
                <span>{t('operativeAddress')}</span>
              </li>
              <li className="flex items-center space-x-2">
                <Image src="/marker-pin.svg" alt="Location" width={16} height={16} />
                <span>{t('legalAddress')}</span>
              </li>
              <li className="flex items-center space-x-2">
                <Image src="/call.svg" alt="Phone" width={16} height={16} />
                <span>{t('tel')}</span>
              </li>
              <li className="flex items-center space-x-2">
                <Image src="/call.svg" alt="Phone" width={16} height={16} />
                <span>{t('cell')}</span>
              </li>
              <li className="flex items-center space-x-2">
                <Image src="/drafts.svg" alt="Email" width={16} height={16} />
                <span>{t('email')}</span>
              </li>
            </ul>
          </div>

          {/* Social Media Section */}
          <div className="flex flex-col items-start lg:ml-8">
            <h3 className="text-lg font-semibold text-v-dark mb-6">{t('followUsTitle')}</h3>
            <div className="flex flex-col gap-2">
              <a
                href="https://www.instagram.com/v.service_srl/"  
                target="_blank"
                rel="noopener noreferrer"
                className="text-v-dark hover:text-v-sky transition-colors"
              >
                <Image
                  src="/ig-instagram-icon.svg"
                  alt="Instagram"
                  width={24}
                  height={24}
                />
              </a>
              <a
                href="https://www.linkedin.com/company/v-service-s-r-l/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-v-dark hover:text-v-sky transition-colors"
              >
                <Image
                  src="/linkedin.svg"
                  alt="LinkedIn"
                  width={24}
                  height={24}
                />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-v-grey/30 pt-6 mt-8">
          <div className="flex flex-col sm:flex-row justify-between items-center text-v-dark text-sm">
            <p>{t('copyright')}</p>
            <div className="flex items-center space-x-4 mt-4 sm:mt-0">
              <div className="flex items-center space-x-1">
                <Image src="/Italian-flag.svg" alt="Italian" width={20} height={14} />
                <span>IT</span>
              </div>
              <div className="flex items-center space-x-1">
                <Image src="/Eng.svg" alt="English" width={20} height={14} />
                <span>EN</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
