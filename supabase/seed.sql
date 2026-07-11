-- Seed: first construction client — Turner Building Inc. (Travis Turner)
--
-- Content and layout mirror the approved v2 design
-- (turner-building-inc-website/project/Turner Building Website v2.dc.html).
-- Images/logos are served from /public/sites/turner/ (copied from that project's
-- assets). Theme drives the cream + orange + Playfair "showcase" look; other
-- tenants can still use the default navy/gold/sans look via their own theme.
--
-- Real (from Travis): company name, email, phone, service area.
-- PLACEHOLDER — still waiting on Travis:
--   * licenseNo "0000000" (real CA license #)
--   * testimonials below are illustrative copy, NOT real named reviews
--
-- After live edits, purge the cache:
--   POST /api/revalidate?secret=...&tag=site:11111111-1111-4111-8111-111111111111

insert into public.clients (id, name, email, phone) values (
  '00000000-0000-4000-8000-000000000001',
  'Travis Turner',
  'tturnerbuilding@gmail.com',  -- lead notifications are sent here
  '(310) 977-6920'
);

insert into public.sites (id, client_id, subdomain, industry, status, theme, business) values (
  '11111111-1111-4111-8111-111111111111',
  '00000000-0000-4000-8000-000000000001',
  'turner',                     -- live at turner.sites.letusbuildyourwebsite.com
  'construction',
  'review',
  '{
    "colors": {
      "primary": "#262420",
      "primaryDark": "#1e1b17",
      "accent": "#e8701f",
      "accentDark": "#c95c14",
      "onAccent": "#ffffff",
      "surface": "#fcfaf5",
      "surfaceAlt": "#f4efe4",
      "surfaceCard": "#ffffff",
      "border": "#eee8db",
      "heading": "#262420",
      "ink": "#33312c",
      "muted": "#6b675d",
      "headerBg": "#fcfaf5",
      "headerFg": "#33312c",
      "headerBorder": "#eee8db",
      "footerBg": "#f4efe4",
      "footerFg": "#6b675d"
    },
    "fonts": { "heading": "serif" },
    "logoUrl": "/sites/turner/logo-horizontal-dark.png",
    "logoFooterUrl": "/sites/turner/logo-dark.png"
  }'::jsonb,
  '{
    "name": "Turner Building Inc.",
    "tagline": "General contracting and custom construction for the Palos Verdes Peninsula and the South Bay.",
    "phone": "(310) 977-6920",
    "email": "tturnerbuilding@gmail.com",
    "address": { "city": "Palos Verdes Peninsula", "state": "CA" },
    "serviceArea": ["Palos Verdes Estates", "Rancho Palos Verdes", "Rolling Hills", "Rolling Hills Estates", "Redondo Beach", "Torrance", "Manhattan Beach", "Hermosa Beach", "San Pedro", "Lomita"],
    "hours": [
      { "days": "Mon–Fri", "open": "7:00 AM – 6:00 PM" },
      { "days": "Sat", "open": "By appointment" }
    ],
    "licenseNo": "0000000",
    "yearsInBusiness": 10
  }'::jsonb
);

insert into public.pages (site_id, slug, title, sort_order, seo, sections) values

-- ---------------------------------------------------------------- home
('11111111-1111-4111-8111-111111111111', 'home', 'Home', 0,
 '{
   "title": "Turner Building Inc. — General Contractor, South Bay & Palos Verdes",
   "description": "General contractor serving the Palos Verdes Peninsula and the South Bay since 2015. Remodels, additions, ADUs, and new construction. Licensed, insured, free estimates."
 }'::jsonb,
 '[
   {
     "type": "hero",
     "variant": "showcase",
     "heading": "Built carefully, from the",
     "headingAccent": "ground up.",
     "subheading": "Remodels, additions, ADUs, and the details in between. Turner Building has served the Peninsula and the South Bay since 2015. Licensed, insured, and on site.",
     "cta": { "label": "Start Your Project", "href": "/contact" },
     "secondaryCta": { "label": "See Our Work", "href": "/projects" },
     "slides": [
       { "image": "/sites/turner/barn-finished.jpg", "alt": "Finished custom equestrian barn in Rolling Hills", "tag": "New Construction", "caption": "Custom Equestrian Barn — Rolling Hills" },
       { "image": "/sites/turner/kitchen-remodel.jpg", "alt": "Remodeled kitchen opening to an ocean view deck", "tag": "Remodeling", "caption": "Ocean View Kitchen — Palos Verdes Estates" },
       { "image": "/sites/turner/framing.jpg", "alt": "Structural framing of a new custom build", "tag": "Framing", "caption": "Exposed Beam Framing — Rancho Palos Verdes" },
       { "image": "/sites/turner/framing-pano.jpg", "alt": "Ground up construction overlooking the coastline", "tag": "General Contracting", "caption": "Hilltop Build — Palos Verdes Peninsula" },
       { "image": "/sites/turner/fence-driveway.jpg", "alt": "New concrete driveway and custom cedar fence", "tag": "Driveways", "caption": "Driveway & Cedar Fence — Torrance" }
     ]
   },
   {
     "type": "trustBar",
     "label": "Serving the South Bay"
   },
   {
     "type": "services",
     "eyebrow": "What We Do",
     "heading": "One team for the whole job",
     "intro": "From the first day of demo to the last coat of finish, you work with one licensed crew that handles it all.",
     "items": [
       { "title": "General Contracting", "description": "We manage the whole project, from permits to the final punch list.", "icon": "contracting" },
       { "title": "Remodeling", "description": "Kitchens, baths, and whole homes, built to be enjoyed for decades.", "icon": "remodeling" },
       { "title": "Concrete", "description": "Foundations, slabs, and patios poured right the first time.", "icon": "concrete" },
       { "title": "Framing", "description": "Straight, solid structural framing for new builds and additions.", "icon": "framing" },
       { "title": "Finish Carpentry", "description": "Trim, built-ins, and the details that make a room feel finished.", "icon": "carpentry" },
       { "title": "Windows & Doors", "description": "New installations and replacements, sealed tight against the coast.", "icon": "windows" },
       { "title": "Siding Installation", "description": "Beautiful, durable exteriors in wood, fiber cement, and more.", "icon": "siding" },
       { "title": "Demolition & Hauling", "description": "Safe, tidy teardown with all the debris hauled away for you.", "icon": "demolition" },
       { "title": "Decks", "description": "Outdoor spaces made for sunsets, barbecues, and ocean air.", "icon": "deck" },
       { "title": "ADUs", "description": "Guest houses and rentals, from design through final inspection.", "icon": "adu" },
       { "title": "Room Additions", "description": "More space that looks and feels like it was always part of your home.", "icon": "addition" },
       { "title": "Driveways", "description": "Stamped, poured, and paver driveways with real curb appeal.", "icon": "driveway" }
     ]
   },
   {
     "type": "about",
     "eyebrow": "About",
     "heading": "A builder''s company, not a sales office.",
     "image": "/sites/turner/barn-interior.jpg",
     "paragraphs": [
       "Turner Building Inc. is a general contracting company serving the Palos Verdes Peninsula since 2015. The person who quotes your job is the person who builds it. We keep our crews small, our sites clean, and our word.",
       "Most of our work comes from neighbors of past clients, which is exactly how we like it."
     ],
     "stats": [
       { "value": "10+", "label": "years on the Peninsula" },
       { "value": "150+", "label": "projects completed" },
       { "value": "1", "label": "point of contact" }
     ]
   },
   {
     "type": "gallery",
     "eyebrow": "Our Work",
     "heading": "Recent projects around the Peninsula",
     "items": [
       { "image": "/sites/turner/barn-finished.jpg", "title": "Custom Equestrian Barn — Rolling Hills", "tag": "New Construction" },
       { "image": "/sites/turner/kitchen-remodel.jpg", "title": "Ocean View Kitchen — Palos Verdes Estates", "tag": "Remodeling" },
       { "image": "/sites/turner/framing.jpg", "title": "Exposed Beam Framing — Rancho Palos Verdes", "tag": "Framing" },
       { "image": "/sites/turner/framing-pano.jpg", "title": "Hilltop Build — Palos Verdes Peninsula", "tag": "General Contracting" },
       { "image": "/sites/turner/barn-interior.jpg", "title": "Timber Interior — Rolling Hills Estates", "tag": "Finish Carpentry" },
       { "image": "/sites/turner/fence-driveway.jpg", "title": "Driveway & Cedar Fence — Torrance", "tag": "Driveways" }
     ]
   },
   {
     "type": "process",
     "eyebrow": "Our Process",
     "heading": "Simple, start to finish",
     "steps": [
       { "title": "Walk the job", "description": "We meet on site, talk through what you want, and flag what to watch for. It''s free and there''s no pressure." },
       { "title": "Straight numbers", "description": "You get a clear written proposal with scope, schedule, and cost. No padding, no surprises later." },
       { "title": "Build it right", "description": "Our crew shows up when we say we will, keeps the site clean, and keeps you in the loop the whole way." },
       { "title": "Final walkthrough", "description": "We walk every detail together and we don''t call it done until you do. Punch list closed, site clean." }
     ]
   },
   {
     "type": "testimonials",
     "variant": "featured",
     "image": "/sites/turner/logo-mark.png",
     "featured": { "quote": "Travis''s crew showed up when they said they would, kept the site clean, and the finish work is flawless. We''ve already had neighbors ask who did it.", "name": "Homeowner", "location": "Rancho Palos Verdes" },
     "items": [
       { "quote": "They remodeled our kitchen and it completely changed how we live in our home. On schedule, on budget, and the finish work speaks for itself.", "name": "Susan", "location": "Palos Verdes Estates" },
       { "quote": "We interviewed four contractors for our room addition. Turner Building was the only one who explained everything clearly and then delivered on every promise.", "name": "Mark", "location": "Redondo Beach" },
       { "quote": "From the new driveway to the custom fence, everything was done with real craftsmanship. The crew was respectful and left the site spotless every day.", "name": "Diane", "location": "Torrance" }
     ]
   },
   {
     "type": "faq",
     "eyebrow": "Common Questions",
     "heading": "Good questions, honest answers",
     "items": [
       { "question": "Are you licensed and insured?", "answer": "Yes. Turner Building Inc. is a fully licensed California general contractor and carries full liability and workers'' compensation insurance on every project." },
       { "question": "What areas do you serve?", "answer": "We serve the whole South Bay with a focus on the Palos Verdes Peninsula: Palos Verdes Estates, Rancho Palos Verdes, Rolling Hills, and Rolling Hills Estates, plus Redondo Beach, Torrance, Manhattan Beach, and Hermosa Beach." },
       { "question": "Do you offer free estimates?", "answer": "Absolutely. We''ll visit your property, talk through your goals, and give you a detailed written estimate at no cost and with no obligation." },
       { "question": "How long does a typical remodel take?", "answer": "It depends on the scope. A bathroom usually runs 3 to 6 weeks, a kitchen 6 to 10 weeks, and whole home remodels or additions take several months. Your proposal includes a realistic timeline before we start." },
       { "question": "Do you handle permits?", "answer": "Yes. We manage the full permit process with your city, including plans, submittals, and inspections. We work with South Bay building departments every week." },
       { "question": "Can you build an ADU on my property?", "answer": "In most cases, yes. California ADU law allows accessory dwelling units on most residential lots. We''ll take a look at your property, explain your options, and handle everything from design through final inspection." }
     ]
   },
   {
     "type": "contact",
     "eyebrow": "Free Estimate",
     "heading": "Let''s talk about your project",
     "intro": "Tell us what you have in mind and we''ll get back to you within one business day. No pressure, no obligation, just straight answers.",
     "services": ["General Contracting", "Remodeling", "Concrete", "Framing", "Finish Carpentry", "Windows & Doors", "Siding Installation", "Demolition & Hauling", "Decks", "ADUs", "Room Additions", "Driveways"]
   }
 ]'::jsonb),

-- ------------------------------------------------------------- services
('11111111-1111-4111-8111-111111111111', 'services', 'Services', 1,
 '{
   "title": "Services | Turner Building Inc.",
   "description": "General contracting, remodeling, concrete, framing, ADUs, additions, and more across the South Bay and Palos Verdes. Licensed and insured."
 }'::jsonb,
 '[
   {
     "type": "pageHeader",
     "heading": "Our services",
     "intro": "Licensed, insured, and experienced across residential construction. If you don''t see your project below, ask — odds are we''ve built one."
   },
   {
     "type": "services",
     "eyebrow": "What We Do",
     "heading": "One team for the whole job",
     "items": [
       { "title": "General Contracting", "description": "We manage the whole project, from permits to the final punch list.", "icon": "contracting" },
       { "title": "Remodeling", "description": "Kitchens, baths, and whole homes, built to be enjoyed for decades.", "icon": "remodeling" },
       { "title": "Concrete", "description": "Foundations, slabs, and patios poured right the first time.", "icon": "concrete" },
       { "title": "Framing", "description": "Straight, solid structural framing for new builds and additions.", "icon": "framing" },
       { "title": "Finish Carpentry", "description": "Trim, built-ins, and the details that make a room feel finished.", "icon": "carpentry" },
       { "title": "Windows & Doors", "description": "New installations and replacements, sealed tight against the coast.", "icon": "windows" },
       { "title": "Siding Installation", "description": "Beautiful, durable exteriors in wood, fiber cement, and more.", "icon": "siding" },
       { "title": "Demolition & Hauling", "description": "Safe, tidy teardown with all the debris hauled away for you.", "icon": "demolition" },
       { "title": "Decks", "description": "Outdoor spaces made for sunsets, barbecues, and ocean air.", "icon": "deck" },
       { "title": "ADUs", "description": "Guest houses and rentals, from design through final inspection.", "icon": "adu" },
       { "title": "Room Additions", "description": "More space that looks and feels like it was always part of your home.", "icon": "addition" },
       { "title": "Driveways", "description": "Stamped, poured, and paver driveways with real curb appeal.", "icon": "driveway" }
     ]
   },
   {
     "type": "process",
     "eyebrow": "Our Process",
     "heading": "Simple, start to finish",
     "steps": [
       { "title": "Walk the job", "description": "We meet on site, talk through what you want, and flag what to watch for. It''s free and there''s no pressure." },
       { "title": "Straight numbers", "description": "You get a clear written proposal with scope, schedule, and cost. No padding, no surprises later." },
       { "title": "Build it right", "description": "Our crew shows up when we say we will, keeps the site clean, and keeps you in the loop the whole way." },
       { "title": "Final walkthrough", "description": "We walk every detail together and we don''t call it done until you do. Punch list closed, site clean." }
     ]
   },
   {
     "type": "cta",
     "heading": "Not sure what your project needs?",
     "body": "Send us a few details and we''ll walk the job with you — free.",
     "cta": { "label": "Get a Free Estimate", "href": "/contact" }
   }
 ]'::jsonb),

-- ------------------------------------------------------------- projects
('11111111-1111-4111-8111-111111111111', 'projects', 'Projects', 2,
 '{
   "title": "Projects | Turner Building Inc.",
   "description": "Recent construction and remodeling projects around the Palos Verdes Peninsula and the South Bay."
 }'::jsonb,
 '[
   {
     "type": "pageHeader",
     "heading": "Project gallery",
     "intro": "Real jobs, real results — a look at recent builds and remodels around the Peninsula."
   },
   {
     "type": "gallery",
     "eyebrow": "Our Work",
     "heading": "Recent projects around the Peninsula",
     "items": [
       { "image": "/sites/turner/barn-finished.jpg", "title": "Custom Equestrian Barn — Rolling Hills", "tag": "New Construction" },
       { "image": "/sites/turner/kitchen-remodel.jpg", "title": "Ocean View Kitchen — Palos Verdes Estates", "tag": "Remodeling" },
       { "image": "/sites/turner/framing.jpg", "title": "Exposed Beam Framing — Rancho Palos Verdes", "tag": "Framing" },
       { "image": "/sites/turner/framing-pano.jpg", "title": "Hilltop Build — Palos Verdes Peninsula", "tag": "General Contracting" },
       { "image": "/sites/turner/barn-interior.jpg", "title": "Timber Interior — Rolling Hills Estates", "tag": "Finish Carpentry" },
       { "image": "/sites/turner/fence-driveway.jpg", "title": "Driveway & Cedar Fence — Torrance", "tag": "Driveways" }
     ]
   },
   {
     "type": "cta",
     "heading": "Want results like these?",
     "cta": { "label": "Start Your Project", "href": "/contact" }
   }
 ]'::jsonb),

-- ---------------------------------------------------------------- about
('11111111-1111-4111-8111-111111111111', 'about', 'About', 3,
 '{
   "title": "About | Turner Building Inc.",
   "description": "A builder''s company serving the Palos Verdes Peninsula since 2015. Meet the team behind Turner Building Inc."
 }'::jsonb,
 '[
   {
     "type": "pageHeader",
     "heading": "About Turner Building Inc.",
     "intro": "A local business built one satisfied customer at a time."
   },
   {
     "type": "about",
     "eyebrow": "About",
     "heading": "A builder''s company, not a sales office.",
     "image": "/sites/turner/barn-interior.jpg",
     "paragraphs": [
       "Turner Building Inc. is a general contracting company serving the Palos Verdes Peninsula since 2015. The person who quotes your job is the person who builds it. We keep our crews small, our sites clean, and our word.",
       "Most of our work comes from neighbors of past clients, which is exactly how we like it."
     ],
     "stats": [
       { "value": "10+", "label": "years on the Peninsula" },
       { "value": "150+", "label": "projects completed" },
       { "value": "1", "label": "point of contact" }
     ]
   },
   {
     "type": "process",
     "eyebrow": "Our Process",
     "heading": "Simple, start to finish",
     "steps": [
       { "title": "Walk the job", "description": "We meet on site, talk through what you want, and flag what to watch for. It''s free and there''s no pressure." },
       { "title": "Straight numbers", "description": "You get a clear written proposal with scope, schedule, and cost. No padding, no surprises later." },
       { "title": "Build it right", "description": "Our crew shows up when we say we will, keeps the site clean, and keeps you in the loop the whole way." },
       { "title": "Final walkthrough", "description": "We walk every detail together and we don''t call it done until you do. Punch list closed, site clean." }
     ]
   },
   {
     "type": "testimonials",
     "variant": "featured",
     "image": "/sites/turner/logo-mark.png",
     "featured": { "quote": "Travis''s crew showed up when they said they would, kept the site clean, and the finish work is flawless. We''ve already had neighbors ask who did it.", "name": "Homeowner", "location": "Rancho Palos Verdes" },
     "items": [
       { "quote": "They remodeled our kitchen and it completely changed how we live in our home. On schedule, on budget, and the finish work speaks for itself.", "name": "Susan", "location": "Palos Verdes Estates" },
       { "quote": "We interviewed four contractors for our room addition. Turner Building was the only one who explained everything clearly and then delivered on every promise.", "name": "Mark", "location": "Redondo Beach" },
       { "quote": "From the new driveway to the custom fence, everything was done with real craftsmanship. The crew was respectful and left the site spotless every day.", "name": "Diane", "location": "Torrance" }
     ]
   },
   {
     "type": "cta",
     "heading": "Let''s talk about your project",
     "cta": { "label": "Contact Us", "href": "/contact" }
   }
 ]'::jsonb),

-- -------------------------------------------------------------- contact
('11111111-1111-4111-8111-111111111111', 'contact', 'Contact', 4,
 '{
   "title": "Contact | Turner Building Inc. — Free Estimates",
   "description": "Request a free estimate from Turner Building Inc. Call (310) 977-6920 or send us your project details."
 }'::jsonb,
 '[
   {
     "type": "pageHeader",
     "heading": "Get your free estimate",
     "intro": "Tell us about your project and we''ll get back to you within one business day."
   },
   {
     "type": "contact",
     "eyebrow": "Free Estimate",
     "heading": "Let''s talk about your project",
     "intro": "Prefer to talk? Call us — we answer.",
     "services": ["General Contracting", "Remodeling", "Concrete", "Framing", "Finish Carpentry", "Windows & Doors", "Siding Installation", "Demolition & Hauling", "Decks", "ADUs", "Room Additions", "Driveways"]
   },
   {
     "type": "serviceArea",
     "heading": "Areas we serve"
   }
 ]'::jsonb);
