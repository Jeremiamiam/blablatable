import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import { Button, Card, Alert, Badge } from './components';
import { useTheme } from './contexts/ThemeContext';
import ThemePage from './pages/ThemePage';

// Page d'accueil Blablatable
const HomePage = () => {
  const { currentTheme } = useTheme();
  
  return (
    <div className="min-h-screen bg-base-100">
      {/* HERO SECTION MODERNE */}
      <div className="relative overflow-hidden bg-gradient-to-br from-primary/5 via-base-200 to-secondary/5">
        <div className="absolute inset-0 bg-gradient-to-t from-base-100/20 to-transparent"></div>
        <div className="relative container mx-auto px-4 py-20 lg:py-32">
          <div className="text-center max-w-5xl mx-auto">
            {/* Badge de lancement */}
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-8">
              <span className="w-2 h-2 bg-primary rounded-full animate-pulse"></span>
              Bientôt disponible • Phase de pré-lancement
            </div>
            
            {/* Titre principal */}
            <h1 className="text-5xl lg:text-7xl font-bold mb-6">
              <span className="text-primary">Bla</span>
              <span className="text-secondary">bla</span>
              <span className="text-accent">table</span>
            </h1>
            
            {/* Sous-titre accrocheur */}
            <h2 className="text-2xl lg:text-3xl font-medium text-base-content/80 mb-8 leading-relaxed">
              Ne plus jamais manger seul.<br/>
              <span className="text-primary font-semibold">Rencontrez des inconnus autour d'un repas.</span>
            </h2>
            
            {/* Proposition de valeur */}
            <p className="text-lg lg:text-xl text-base-content/70 max-w-3xl mx-auto mb-12 leading-relaxed">
              Rejoignez une communauté bienveillante qui transforme vos repas en moments de partage authentique.
              Aucun filtre, aucun jugement, juste de belles rencontres humaines.
            </p>
            
            {/* CTA principal avec micro-animation */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button variant="primary" size="lg" className="text-lg px-8 py-4 btn-glow">
                🚀 Rejoindre l'aventure
              </Button>
              <Button variant="ghost" size="lg" className="text-lg px-8 py-4">
                📖 Découvrir le concept
              </Button>
            </div>
            
            {/* Social proof */}
            <div className="mt-12 flex items-center justify-center gap-6 text-base-content/60">
              <div className="flex items-center gap-2">
                <div className="flex -space-x-2">
                  <div className="w-8 h-8 bg-primary rounded-full border-2 border-base-100"></div>
                  <div className="w-8 h-8 bg-secondary rounded-full border-2 border-base-100"></div>
                  <div className="w-8 h-8 bg-accent rounded-full border-2 border-base-100"></div>
                  <div className="w-8 h-8 bg-neutral rounded-full border-2 border-base-100 flex items-center justify-center text-xs font-bold">
                    +
                  </div>
                </div>
                <span className="font-medium">300+ personnes intéressées</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* SECTION COMMENT ÇA MARCHE */}
      <div className="py-20 lg:py-32 bg-base-100">
        <div className="container mx-auto px-4">
          {/* Header section */}
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-primary mb-6">
              Comment ça marche ?
            </h2>
            <p className="text-xl text-base-content/70 max-w-3xl mx-auto leading-relaxed">
              Simple comme bonjour : rencontrez 1 à 2 personnes autour d'un repas, 
              <span className="text-primary font-semibold"> quand vous voulez, où vous voulez</span>.
            </p>
          </div>

          {/* Flow principal avec steps */}
          <div className="max-w-4xl mx-auto mb-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              
              {/* Option 1 : J'ouvre ma table */}
              <div className="relative">
                <div className="bg-gradient-to-br from-primary/5 to-primary/10 p-8 rounded-2xl h-full border border-primary/20">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 bg-primary text-primary-content rounded-xl flex items-center justify-center text-xl font-bold">
                      1
                    </div>
                    <h3 className="text-2xl font-bold text-primary">J'ouvre ma table</h3>
                  </div>
                  
                  <div className="space-y-4 mb-6">
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <div className="w-2 h-2 bg-primary rounded-full"></div>
                      </div>
                      <p className="text-base-content">Je choisis <strong>quand</strong> et <strong>où</strong> je veux manger</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <div className="w-2 h-2 bg-primary rounded-full"></div>
                      </div>
                      <p className="text-base-content">Je publie mon "événement" avec mon prénom</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <div className="w-2 h-2 bg-primary rounded-full"></div>
                      </div>
                      <p className="text-base-content">D'autres personnes me rejoignent</p>
                    </div>
                  </div>
                  
                  <div className="bg-primary/10 p-4 rounded-lg">
                    <p className="text-sm text-primary font-medium">
                      💡 Parfait si vous avez déjà une idée de restaurant ou un lieu en tête
                    </p>
                  </div>
                </div>
              </div>

              {/* Option 2 : Je rejoins une table */}
              <div className="relative">
                <div className="bg-gradient-to-br from-secondary/5 to-secondary/10 p-8 rounded-2xl h-full border border-secondary/20">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 bg-secondary text-secondary-content rounded-xl flex items-center justify-center text-xl font-bold">
                      2
                    </div>
                    <h3 className="text-2xl font-bold text-secondary">Je rejoins une table</h3>
                  </div>
                  
                  <div className="space-y-4 mb-6">
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-secondary/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <div className="w-2 h-2 bg-secondary rounded-full"></div>
                      </div>
                      <p className="text-base-content">Je consulte les tables ouvertes près de moi</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-secondary/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <div className="w-2 h-2 bg-secondary rounded-full"></div>
                      </div>
                      <p className="text-base-content">Je m'inscris avec mon prénom</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-secondary/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <div className="w-2 h-2 bg-secondary rounded-full"></div>
                      </div>
                      <p className="text-base-content">On échange via chat pour se retrouver</p>
                    </div>
                  </div>
                  
                  <div className="bg-secondary/10 p-4 rounded-lg">
                    <p className="text-sm text-secondary font-medium">
                      💡 Parfait si vous voulez découvrir de nouveaux lieux et rencontres
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Règles importantes */}
          <div className="bg-accent/5 border border-accent/20 rounded-2xl p-8 mb-12">
            <h3 className="text-2xl font-bold text-accent mb-6 text-center">Les règles du jeu</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">👥</span>
                </div>
                <h4 className="font-semibold text-accent mb-2">Maximum 3 personnes</h4>
                <p className="text-sm text-base-content/70">Pour garder l'intimité et favoriser les échanges</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">💰</span>
                </div>
                <h4 className="font-semibold text-accent mb-2">Chacun paie sa part</h4>
                <p className="text-sm text-base-content/70">Aucune obligation financière entre participants</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">😊</span>
                </div>
                <h4 className="font-semibold text-accent mb-2">Bienveillance</h4>
                <p className="text-sm text-base-content/70">Respect et ouverture d'esprit avant tout</p>
              </div>
            </div>
          </div>

          {/* CTA section */}
          <div className="text-center">
            <p className="text-lg text-base-content/70 mb-6">Prêt(e) à vivre l'expérience ?</p>
            <Button variant="primary" size="lg" className="px-8 py-4">
              🎯 Je veux tester l'aventure
            </Button>
          </div>
        </div>
      </div>

      {/* SECTION NOTRE COMMUNAUTÉ */}
      <div className="py-20 lg:py-32 bg-base-200">
        <div className="container mx-auto px-4">
          
          {/* Header moderne */}
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              <span className="text-primary">Une communauté</span> 
              <span className="text-base-content"> qui vous ressemble</span>
            </h2>
            <p className="text-xl text-base-content/70 max-w-3xl mx-auto leading-relaxed">
              Rejoignez des milliers de personnes qui ont choisi l'authenticité plutôt que l'isolement.
              <span className="text-primary font-semibold"> Ici, chaque rencontre est une découverte.</span>
            </p>
          </div>

          {/* Valeurs avec design moderne */}
          <div className="max-w-6xl mx-auto mb-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              
              {/* Qui sommes-nous */}
              <div className="bg-gradient-to-br from-primary/5 to-primary/10 p-8 rounded-2xl border border-primary/20">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center">
                    <span className="text-2xl">😊</span>
                  </div>
                  <h3 className="text-2xl font-bold text-primary">Qui sommes-nous ?</h3>
                </div>
                
                <p className="text-base-content/80 mb-6 leading-relaxed">
                  Une communauté <strong className="text-primary">souriante, chaleureuse, conviviale et curieuse</strong>. 
                  Nous aimons l'échange et la diversité des sujets qui peuvent être abordés.
                </p>

                <div className="flex flex-wrap gap-2">
                  <Badge variant="primary" className="px-3 py-1">Souriante</Badge>
                  <Badge variant="secondary" className="px-3 py-1">Chaleureuse</Badge>
                  <Badge variant="accent" className="px-3 py-1">Conviviale</Badge>
                  <Badge variant="primary" className="px-3 py-1">Curieuse</Badge>
                </div>
              </div>

              {/* Notre esprit */}
              <div className="bg-gradient-to-br from-secondary/5 to-secondary/10 p-8 rounded-2xl border border-secondary/20">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-secondary/20 rounded-xl flex items-center justify-center">
                    <span className="text-2xl">✨</span>
                  </div>
                  <h3 className="text-2xl font-bold text-secondary">Notre esprit</h3>
                </div>
                
                <p className="text-base-content/80 mb-4 leading-relaxed">
                  Nous aimons les rencontres fortuites où l'on n'attend 
                  <strong className="text-secondary"> rien d'autre qu'un bon moment de partage</strong>.
                </p>
                
                <p className="text-base-content/80 leading-relaxed">
                  Nous <strong className="text-accent">osons l'inconnu</strong> car nous sommes convaincus que 
                  <strong className="text-secondary"> toute rencontre humaine peut être intéressante</strong>.
                </p>
              </div>

              {/* Nos valeurs */}
              <div className="bg-gradient-to-br from-accent/5 to-accent/10 p-8 rounded-2xl border border-accent/20">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-accent/20 rounded-xl flex items-center justify-center">
                    <span className="text-2xl">🤝</span>
                  </div>
                  <h3 className="text-2xl font-bold text-accent">Nos valeurs</h3>
                </div>
                
                <p className="text-base-content/80 leading-relaxed">
                  Nous privilégions l'<strong className="text-accent">empathie</strong> et nous 
                  <strong className="text-primary"> adaptons aux personnalités de chacun</strong> 
                  pour maintenir l'équilibre et éviter les monologues ennuyeux.
                </p>
              </div>

              {/* Notre sécurité */}
              <div className="bg-gradient-to-br from-neutral/5 to-neutral/10 p-8 rounded-2xl border border-neutral/20">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-neutral/20 rounded-xl flex items-center justify-center">
                    <span className="text-2xl">🛡️</span>
                  </div>
                  <h3 className="text-2xl font-bold text-neutral">Notre modération</h3>
                </div>
                
                <p className="text-base-content/80 leading-relaxed">
                  Nous <strong className="text-primary">faisons confiance</strong> mais n'hésitons pas à 
                  <strong className="text-accent"> signaler les comportements inappropriés</strong> 
                  pour préserver l'esprit bienveillant de notre communauté.
                </p>
              </div>
            </div>
          </div>

          {/* Qui peut nous rejoindre */}
          <div className="bg-base-100 rounded-2xl p-8 shadow-lg max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-center text-primary mb-8">
              Qui peut nous rejoindre ?
            </h3>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              <div className="space-y-3">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                  <span className="text-2xl">🎓</span>
                </div>
                <p className="text-sm font-medium">Étudiants</p>
              </div>
              <div className="space-y-3">
                <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto">
                  <span className="text-2xl">💻</span>
                </div>
                <p className="text-sm font-medium">Télétravailleurs</p>
              </div>
              <div className="space-y-3">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto">
                  <span className="text-2xl">✈️</span>
                </div>
                <p className="text-sm font-medium">En voyage</p>
              </div>
              <div className="space-y-3">
                <div className="w-16 h-16 bg-neutral/10 rounded-full flex items-center justify-center mx-auto">
                  <span className="text-2xl">🏠</span>
                </div>
                <p className="text-sm font-medium">Nouveaux arrivants</p>
              </div>
            </div>
            
            <p className="text-center text-base-content/70 mt-8 leading-relaxed">
              Que vous soyez célibataire, en transition professionnelle, en déplacement ou simplement 
              envie de rencontrer du monde, <strong className="text-primary">vous avez votre place ici</strong>.
            </p>
          </div>
        </div>
      </div>

      {/* SECTION TARIF OPTIMISÉE */}
      <div className="py-20 lg:py-32 bg-gradient-to-br from-success/5 via-base-100 to-primary/5">
        <div className="container mx-auto px-4">
          
          {/* Header avec value proposition */}
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              <span className="text-success">Accessible</span> 
              <span className="text-base-content"> à tous</span>
            </h2>
            <p className="text-xl text-base-content/70 max-w-3xl mx-auto leading-relaxed">
              Parce que les belles rencontres ne devraient pas être un luxe, 
              nous avons voulu un tarif qui permette à chacun de participer.
            </p>
          </div>

          {/* Pricing card moderne */}
          <div className="max-w-md mx-auto mb-16">
            <div className="bg-base-100 rounded-3xl shadow-2xl overflow-hidden border border-primary/10">
              
              {/* Header du pricing */}
              <div className="bg-gradient-to-r from-primary to-secondary p-8 text-primary-content text-center">
                <h3 className="text-2xl font-bold mb-2">Abonnement Annuel</h3>
                <p className="text-primary-content/80">Rencontres illimitées pendant 1 an</p>
              </div>
              
              {/* Prix principal */}
              <div className="p-8 text-center">
                <div className="mb-6">
                  <div className="text-5xl font-bold text-primary mb-2">60€</div>
                  <p className="text-lg text-base-content/70">TTC pour un an</p>
                </div>
                
                {/* Prix mensuel mis en avant */}
                <div className="bg-primary/5 rounded-2xl p-6 mb-6">
                  <p className="text-sm text-base-content/60 mb-1">Soit seulement</p>
                  <div className="text-3xl font-bold text-primary mb-1">5€/mois</div>
                  <p className="text-sm text-base-content/60">Le prix d'un café !</p>
                </div>
                
                {/* Bénéfices inclus */}
                <div className="space-y-3 mb-8">
                  <div className="flex items-center gap-3">
                    <div className="w-5 h-5 bg-success rounded-full flex items-center justify-center flex-shrink-0">
                      <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="text-base-content">Repas illimités toute l'année</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-5 h-5 bg-success rounded-full flex items-center justify-center flex-shrink-0">
                      <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="text-base-content">Accès à toute la communauté</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-5 h-5 bg-success rounded-full flex items-center justify-center flex-shrink-0">
                      <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="text-base-content">Support et modération</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Comparaison avec alternatives */}
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="text-xl font-semibold text-base-content mb-6">Pourquoi c'est si accessible ?</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
              <div className="bg-base-200/50 rounded-lg p-4">
                <div className="font-semibold text-base-content/80 mb-1">Restaurant classique</div>
                <div className="text-lg font-bold text-base-content">25€+</div>
                <div className="text-base-content/60">pour 1 repas</div>
              </div>
              <div className="bg-primary/10 rounded-lg p-4 ring-2 ring-primary">
                <div className="font-semibold text-primary mb-1">Blablatable</div>
                <div className="text-lg font-bold text-primary">5€</div>
                <div className="text-primary/70">pour 1 mois entier</div>
              </div>
              <div className="bg-base-200/50 rounded-lg p-4">
                <div className="font-semibold text-base-content/80 mb-1">Applications dating</div>
                <div className="text-lg font-bold text-base-content">30€+</div>
                <div className="text-base-content/60">par mois</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* SECTION CROWDFUNDING MODERNISÉE */}
      <div className="py-20 lg:py-32 bg-gradient-to-br from-primary via-primary to-secondary text-primary-content">
        <div className="container mx-auto px-4">
          
          {/* Header impactant */}
          <div className="text-center mb-16">
            <div className="inline-block bg-primary-content/10 rounded-full px-6 py-2 mb-6">
              <span className="text-primary-content/90 font-medium">🚀 Phase de lancement</span>
            </div>
            <h2 className="text-4xl lg:text-6xl font-bold mb-6">
              Rejoignez l'aventure dès maintenant !
            </h2>
            <p className="text-xl text-primary-content/80 max-w-3xl mx-auto leading-relaxed">
              Vous croyez au potentiel de cette initiative ? 
              <strong className="text-primary-content"> Aidez-nous à créer cette communauté</strong> qui va changer la façon dont on vit les repas en ville.
            </p>
          </div>

          {/* Stats + urgence */}
          <div className="bg-primary-content/10 rounded-2xl p-8 max-w-4xl mx-auto mb-16">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-4xl font-bold text-primary-content mb-2">300+</div>
                <p className="text-primary-content/80">Personnes déjà intéressées</p>
              </div>
              <div>
                <div className="text-4xl font-bold text-primary-content mb-2">5K€</div>
                <p className="text-primary-content/80">Objectif de financement</p>
              </div>
              <div>
                <div className="text-4xl font-bold text-primary-content mb-2">2025</div>
                <p className="text-primary-content/80">Lancement prévu</p>
              </div>
            </div>
          </div>

          {/* CTA principal optimisé */}
          <div className="max-w-2xl mx-auto">
            <div className="bg-base-100 text-base-content rounded-3xl p-8 shadow-2xl">
              
              {/* Header du CTA */}
              <div className="text-center mb-8">
                <h3 className="text-3xl font-bold text-primary mb-4">
                  🎯 Pré-inscrivez-vous gratuitement
                </h3>
                <p className="text-base-content/70 text-lg">
                  Soyez parmi les premiers informés du lancement et obtenez des avantages exclusifs.
                </p>
              </div>

              {/* Avantages de la pré-inscription */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-3 h-3 text-primary" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-sm">Accès prioritaire</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-3 h-3 text-primary" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-sm">Tarif de lancement</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-3 h-3 text-primary" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-sm">Actualités exclusives</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-3 h-3 text-primary" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-sm">Influence sur le développement</span>
                </div>
              </div>
              
              {/* Formulaire */}
              <div className="space-y-4">
                <div className="form-control">
                  <input 
                    type="email" 
                    placeholder="votre.email@exemple.com" 
                    className="input input-bordered input-primary input-lg w-full text-center"
                  />
                </div>
                
                <Button variant="primary" size="lg" className="w-full text-lg py-4">
                  🚀 Je rejoins l'aventure gratuitement !
                </Button>
                
                <p className="text-xs text-base-content/60 text-center">
                  Aucun engagement • Désabonnement en 1 clic • Vos données sont protégées
                </p>
              </div>
            </div>
          </div>

          {/* Call to action secondaire */}
          <div className="text-center mt-12">
            <p className="text-primary-content/80 mb-4">
              Vous préférez en parler autour de vous d'abord ?
            </p>
            <Button variant="ghost" size="lg" className="text-primary-content border-primary-content/30 hover:bg-primary-content/10">
              📢 Partager l'idée
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

// Navigation Component
const Navigation = () => {
  const location = useLocation();
  const { currentTheme } = useTheme();
  
  return (
    <div className="navbar bg-base-100 border-b border-base-300">
      <div className="navbar-start">
        <Link to="/" className="text-2xl font-bold text-primary">
          🍽️ Blablatable
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link 
              to="/" 
              className={location.pathname === '/' ? 'active' : ''}
            >
              🏠 Accueil
            </Link>
          </li>
          <li>
            <Link 
              to="/theme" 
              className={location.pathname === '/theme' ? 'active' : ''}
            >
              🎨 Thèmes
            </Link>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <Badge variant="ghost">
          {currentTheme}
        </Badge>
      </div>
    </div>
  );
};

// App Component avec Router
function App() {
  return (
    <Router basename="/blablatable">
      <div className="min-h-screen bg-base-100">
        <Navigation />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/theme" element={<ThemePage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
