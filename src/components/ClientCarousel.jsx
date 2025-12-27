import { motion } from 'framer-motion'

const clientsRow1 = [
    { name: 'Nuke +', instagram: '@nukemais', image: '/carrossel/nuke-mais-BCV7-mYm.png' },
    { name: 'Natalia Naves', instagram: '@eunataliannaves', image: '/carrossel/natalia-naves-B5LK7y9v.png' },
    { name: 'Imagine Company', instagram: '@imaginecompanydesign', image: '/carrossel/imagine-company-CzpLa6vo.png' },
    { name: 'Gabriel Rucci', instagram: '@gabrielrucci', image: '/carrossel/cacique-ads-Dtuknawi.png' },
    { name: 'Arretada Agência', instagram: '@arretadaagencia', image: '/carrossel/arretada-agencia-605oSzGp.png' },
    { name: 'Be Social', instagram: '@besocial', image: '/carrossel/be-social-Bs2DCBrY.png' },
    { name: 'Agência Framar', instagram: '@agenciaframar', image: '/carrossel/agencia-framar-CbZ9x35E.png' },
]

const clientsRow2 = [
    { name: 'Doma Gestão', instagram: '@domagestao', image: '/carrossel/doma-gestao-D1VPaHzb.png' },
    { name: 'First Place', instagram: '@firstplaceoficial', image: '/carrossel/first-place-CcG0UtEJ.png' },
    { name: 'Jacob Lima', instagram: '@atlassociety', image: '/carrossel/jacob-lima-C2PEuQ6d.png' },
    { name: 'Space Tech', instagram: '@spacetechdigital', image: '/carrossel/space-tech-DLLz-XxW.png' },
    { name: 'Raphael Lucas', instagram: '@raphael_lucas', image: '/carrossel/raphael-lucas-Oj9lMGd5.png' },
    { name: 'ATB Studio', instagram: '@atbstudio', image: '/carrossel/atb-studio-DzLCg-Uz.png' },
    { name: 'Agência Leelah', instagram: '@agencialeelah', image: '/carrossel/agencia-leelah-BiLb2DtQ.png' },
]

function CarouselRow({ clients, direction = 'left', duration = 30 }) {
    const duplicatedClients = [...clients, ...clients]
    
    return (
        <div className="overflow-hidden py-3">
            <motion.div
                className="flex gap-4"
                animate={{
                    x: direction === 'left' ? ['0%', '-50%'] : ['-50%', '0%']
                }}
                transition={{
                    x: {
                        repeat: Infinity,
                        repeatType: 'loop',
                        duration: duration,
                        ease: 'linear'
                    }
                }}
            >
                {duplicatedClients.map((client, idx) => (
                    <a
                        key={idx}
                        href={`https://instagram.com/${client.instagram.replace('@', '')}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-shrink-0 group"
                    >
                        <div className="w-48 sm:w-56 relative overflow-hidden rounded-xl">
                            <img
                                src={client.image}
                                alt={client.name}
                                className="w-full aspect-square object-cover group-hover:scale-105 transition-transform duration-500"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                            <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                                <p className="text-white font-semibold text-sm">{client.name}</p>
                                <p className="text-gray-300 text-xs">{client.instagram}</p>
                            </div>
                        </div>
                    </a>
                ))}
            </motion.div>
        </div>
    )
}

export function ClientCarousel() {
    return (
        <div className="space-y-2">
            <CarouselRow clients={clientsRow1} direction="left" duration={35} />
            <CarouselRow clients={clientsRow2} direction="right" duration={40} />
        </div>
    )
}
