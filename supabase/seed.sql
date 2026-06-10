-- Seed: first construction client — Turner Building Inc. (Travis Turner)
--
-- Real info (from Travis): company name, email, phone, service area.
-- Still PLACEHOLDER (waiting on Travis — see "questions" in the README/chat):
--   license number, years in business, exact services list, project photos,
--   testimonials, about/story copy, logo (have PDF — convert + upload to the
--   `media` bucket, then set theme.logoUrl).
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
    "colors": { "primary": "#1c2a39", "primaryDark": "#111a24", "accent": "#e8a33d" }
  }'::jsonb,
  '{
    "name": "Turner Building Inc.",
    "tagline": "Quality construction and remodeling in the South Bay, built on trust.",
    "phone": "(310) 977-6920",
    "email": "tturnerbuilding@gmail.com",
    "address": { "city": "Palos Verdes Peninsula", "state": "CA" },
    "serviceArea": ["Rancho Palos Verdes", "Palos Verdes Estates", "Rolling Hills", "Rolling Hills Estates", "Torrance", "Redondo Beach", "Hermosa Beach", "Manhattan Beach", "San Pedro", "Lomita"],
    "hours": [
      { "days": "Mon–Fri", "open": "7:00 AM – 6:00 PM" },
      { "days": "Sat", "open": "By appointment" }
    ],
    "licenseNo": "0000000",
    "yearsInBusiness": 15
  }'::jsonb
);

insert into public.pages (site_id, slug, title, sort_order, seo, sections) values

-- ---------------------------------------------------------------- home
('11111111-1111-4111-8111-111111111111', 'home', 'Home', 0,
 '{
   "title": "Turner Building Inc. | General Contractor in Palos Verdes, CA",
   "description": "General contractor serving the Palos Verdes Peninsula and the South Bay. Remodels, additions, and new construction. Licensed and insured — free estimates."
 }'::jsonb,
 '[
   {
     "type": "hero",
     "heading": "Built right. Built to last.",
     "subheading": "General contractor serving the Palos Verdes Peninsula and the South Bay. Remodels, additions, and ground-up construction.",
     "image": "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=1800&q=80",
     "cta": { "label": "Get a Free Estimate", "href": "/contact" }
   },
   {
     "type": "badges",
     "items": [
       { "label": "Years in business", "value": "15+" },
       { "label": "Projects completed", "value": "400+" },
       { "label": "Licensed & insured", "value": "CA" },
       { "label": "Free estimates", "value": "Always" }
     ]
   },
   {
     "type": "services",
     "heading": "What we do",
     "intro": "From a kitchen refresh to a full custom build, one crew handles your project start to finish.",
     "items": [
       { "title": "Kitchen & Bath Remodels", "description": "Full-service remodels — design, demo, plumbing, electrical, and finish work handled by one team." },
       { "title": "Room Additions", "description": "Add square footage that matches your home seamlessly, from permits through paint." },
       { "title": "Whole-Home Renovations", "description": "Open up floor plans, modernize finishes, and bring older South Bay homes up to today''s standards." },
       { "title": "New Construction", "description": "Ground-up custom homes and ADUs, managed end to end." },
       { "title": "Decks & Outdoor Living", "description": "Decks, patio covers, and outdoor spaces built to make the most of the coastal views." },
       { "title": "General Repairs", "description": "Licensed help for the projects on your list — drywall, framing, doors, dry rot, and more." }
     ]
   },
   {
     "type": "gallery",
     "heading": "Recent projects",
     "intro": "A few of the jobs we''re proud of around the South Bay.",
     "items": [
       { "image": "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&q=80", "title": "Custom home build", "location": "Rancho Palos Verdes, CA", "tag": "New build" },
       { "image": "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=1200&q=80", "title": "Kitchen remodel", "location": "Redondo Beach, CA", "tag": "Remodel" },
       { "image": "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=1200&q=80", "title": "Whole-home renovation", "location": "Palos Verdes Estates, CA", "tag": "Renovation" }
     ]
   },
   {
     "type": "testimonials",
     "heading": "What our customers say",
     "items": [
       { "quote": "They finished our addition on time and on budget, and the crew left the site spotless every day. Couldn''t ask for more.", "name": "Maria G.", "location": "Torrance" },
       { "quote": "Honest pricing and great communication from the first walkthrough to the final inspection.", "name": "Dave R.", "location": "Rancho Palos Verdes" },
       { "quote": "Our kitchen looks like it came out of a magazine. We''ve already recommended them to three neighbors.", "name": "Janelle T.", "location": "Redondo Beach" }
     ]
   },
   {
     "type": "serviceArea",
     "heading": "Proudly serving the South Bay",
     "intro": "Based on the Palos Verdes Peninsula, we take on projects throughout the surrounding communities."
   },
   {
     "type": "cta",
     "heading": "Ready to start your project?",
     "body": "Tell us what you have in mind and we''ll get you a free, no-pressure estimate.",
     "cta": { "label": "Request an Estimate", "href": "/contact" }
   }
 ]'::jsonb),

-- ------------------------------------------------------------- services
('11111111-1111-4111-8111-111111111111', 'services', 'Services', 1,
 '{
   "title": "Services | Turner Building Inc.",
   "description": "Kitchen and bath remodels, room additions, renovations, and new construction in the South Bay and Palos Verdes. Licensed and insured."
 }'::jsonb,
 '[
   {
     "type": "pageHeader",
     "heading": "Our services",
     "intro": "Licensed, insured, and experienced across residential construction. If you don''t see your project below, ask — odds are we''ve built one."
   },
   {
     "type": "services",
     "heading": "Residential construction, start to finish",
     "items": [
       { "title": "Kitchen & Bath Remodels", "description": "Design-build remodels with one point of contact. We handle demolition, plumbing, electrical, cabinetry, counters, tile, and paint." },
       { "title": "Room Additions", "description": "Master suites, in-law units, and home offices. We manage engineering, permits, and construction so the addition feels original to the house." },
       { "title": "Whole-Home Renovations", "description": "Full interior renovations that open up floor plans and modernize older homes while respecting their character." },
       { "title": "New Construction & ADUs", "description": "Ground-up custom homes and accessory dwelling units, from plans and permits through final walkthrough." },
       { "title": "Decks & Outdoor Living", "description": "Decks, patio covers, and outdoor kitchens engineered for the coastal climate and built to last." },
       { "title": "Exterior & Structural", "description": "Siding, windows, structural repairs, and retrofits done to spec." },
       { "title": "General Repairs", "description": "Drywall, framing, doors, dry rot, and the punch list a handyman can''t legally touch." },
       { "title": "Insurance Restoration", "description": "Fire and water damage rebuilds, coordinated directly with your insurance adjuster." }
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
     "intro": "Real jobs, real results. Photos from recent builds and remodels around the South Bay."
   },
   {
     "type": "gallery",
     "heading": "Recent work",
     "items": [
       { "image": "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&q=80", "title": "Custom home build", "location": "Rancho Palos Verdes, CA", "tag": "New build" },
       { "image": "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=1200&q=80", "title": "Kitchen remodel", "location": "Redondo Beach, CA", "tag": "Remodel" },
       { "image": "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200&q=80", "title": "Open-concept living room", "location": "Torrance, CA", "tag": "Remodel" },
       { "image": "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=1200&q=80", "title": "Whole-home renovation", "location": "Palos Verdes Estates, CA", "tag": "Renovation" },
       { "image": "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=1200&q=80", "title": "Hillside addition", "location": "Rolling Hills Estates, CA", "tag": "Addition" },
       { "image": "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1200&q=80", "title": "Foundation & framing", "location": "San Pedro, CA", "tag": "New build" }
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
   "description": "South Bay general contractor serving the Palos Verdes Peninsula. Meet the team behind Turner Building Inc."
 }'::jsonb,
 '[
   {
     "type": "pageHeader",
     "heading": "About Turner Building Inc.",
     "intro": "A local business built one satisfied customer at a time."
   },
   {
     "type": "about",
     "heading": "Our story",
     "image": "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=1200&q=80",
     "paragraphs": [
       "Turner Building Inc. is built on a simple promise: do the job right, charge a fair price, and stand behind the work.",
       "We''re a local general contractor based on the Palos Verdes Peninsula. Most of our work comes from referrals and repeat customers around the South Bay, which is exactly how we like it — it means the last job earned the next one.",
       "Every project, large or small, gets a dedicated lead, a clear written estimate, and a crew that treats your home like their own."
     ]
   },
   {
     "type": "badges",
     "items": [
       { "label": "Years in business", "value": "15+" },
       { "label": "Projects completed", "value": "400+" },
       { "label": "CA License", "value": "#0000000" },
       { "label": "Bonded & insured", "value": "Yes" }
     ]
   },
   {
     "type": "testimonials",
     "heading": "Why neighbors recommend us",
     "items": [
       { "quote": "They finished our addition on time and on budget, and the crew left the site spotless every day.", "name": "Maria G.", "location": "Torrance" },
       { "quote": "Honest pricing and great communication from the first walkthrough to the final inspection.", "name": "Dave R.", "location": "Rancho Palos Verdes" },
       { "quote": "Our kitchen looks like it came out of a magazine.", "name": "Janelle T.", "location": "Redondo Beach" }
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
     "heading": "Contact us",
     "intro": "Prefer to talk? Call us — we answer."
   },
   {
     "type": "serviceArea",
     "heading": "Areas we serve"
   }
 ]'::jsonb);
