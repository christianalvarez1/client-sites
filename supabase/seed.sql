-- Seed: first construction client.
--
-- !! PLACEHOLDER CONTENT !!
-- The business name, copy, phone, license number, and Unsplash photos below
-- are stand-ins. Swap in the real client's content (name, phone, email,
-- service area, project photos uploaded to the `media` storage bucket) before
-- sharing the site. Structure (pages + section types) is the real
-- construction template and should not need to change.
--
-- After live edits, purge the cache:
--   POST /api/revalidate?secret=...&tag=site:11111111-1111-4111-8111-111111111111

insert into public.clients (id, name, email, phone) values (
  '00000000-0000-4000-8000-000000000001',
  'Sam Placeholder',
  'owner@example.com',          -- lead notifications are sent here
  '(555) 014-2400'
);

insert into public.sites (id, client_id, subdomain, industry, status, theme, business) values (
  '11111111-1111-4111-8111-111111111111',
  '00000000-0000-4000-8000-000000000001',
  'summit',                     -- live at summit.sites.letusbuildyourwebsite.com
  'construction',
  'review',
  '{
    "colors": { "primary": "#1c2a39", "primaryDark": "#111a24", "accent": "#e8a33d" }
  }'::jsonb,
  '{
    "name": "Summit Builders",
    "tagline": "Quality construction and remodeling, built on trust.",
    "phone": "(555) 014-2400",
    "email": "owner@example.com",
    "address": { "city": "Fresno", "state": "CA" },
    "serviceArea": ["Fresno", "Clovis", "Madera", "Sanger", "Selma", "Kingsburg"],
    "hours": [
      { "days": "Mon–Fri", "open": "7:00 AM – 6:00 PM" },
      { "days": "Sat", "open": "8:00 AM – 2:00 PM" }
    ],
    "licenseNo": "0000000",
    "yearsInBusiness": 15
  }'::jsonb
);

insert into public.pages (site_id, slug, title, sort_order, seo, sections) values

-- ---------------------------------------------------------------- home
('11111111-1111-4111-8111-111111111111', 'home', 'Home', 0,
 '{
   "title": "Summit Builders | General Contractor in Fresno, CA",
   "description": "Family-owned general contractor serving Fresno and the Central Valley. Remodels, additions, concrete, and new construction. Licensed and insured — free estimates."
 }'::jsonb,
 '[
   {
     "type": "hero",
     "heading": "Built right. Built to last.",
     "subheading": "Family-owned general contractor serving Fresno and the Central Valley for over 15 years. Remodels, additions, concrete, and ground-up construction.",
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
       { "title": "Concrete & Foundations", "description": "Driveways, patios, slabs, and foundation work done to spec and built to last." },
       { "title": "New Construction", "description": "Ground-up custom homes and ADUs, managed end to end." },
       { "title": "Roofing & Exteriors", "description": "Roof replacement, siding, stucco, and exterior repairs that protect your investment." },
       { "title": "General Repairs", "description": "Licensed help for the projects on your list — drywall, framing, doors, decks, and more." }
     ]
   },
   {
     "type": "gallery",
     "heading": "Recent projects",
     "intro": "A few of the jobs we''re proud of around the Central Valley.",
     "items": [
       { "image": "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&q=80", "title": "Custom home build", "location": "Clovis, CA", "tag": "New build" },
       { "image": "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=1200&q=80", "title": "Kitchen remodel", "location": "Fresno, CA", "tag": "Remodel" },
       { "image": "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=1200&q=80", "title": "Whole-home renovation", "location": "Madera, CA", "tag": "Renovation" }
     ]
   },
   {
     "type": "testimonials",
     "heading": "What our customers say",
     "items": [
       { "quote": "They finished our addition on time and on budget, and the crew left the site spotless every day. Couldn''t ask for more.", "name": "Maria G.", "location": "Fresno" },
       { "quote": "Honest pricing and great communication from the first walkthrough to the final inspection.", "name": "Dave R.", "location": "Clovis" },
       { "quote": "Our kitchen looks like it came out of a magazine. We''ve already recommended them to three neighbors.", "name": "Janelle T.", "location": "Sanger" }
     ]
   },
   {
     "type": "serviceArea",
     "heading": "Proudly serving the Central Valley",
     "intro": "Based in Fresno, we take on projects throughout the surrounding communities."
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
   "title": "Services | Summit Builders",
   "description": "Kitchen and bath remodels, room additions, concrete, roofing, and new construction in Fresno, CA. Licensed and insured."
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
       { "title": "Concrete & Foundations", "description": "Driveways, patios, walkways, stem walls, and slab foundations — properly graded, reinforced, and finished." },
       { "title": "New Construction & ADUs", "description": "Ground-up custom homes and accessory dwelling units, from plans and permits through final walkthrough." },
       { "title": "Roofing & Exteriors", "description": "Composition and tile roof replacement, siding, stucco repair, windows, and exterior paint." },
       { "title": "Decks & Patio Covers", "description": "Outdoor living spaces built with engineered footings and quality lumber, stained or painted to match." },
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
   "title": "Projects | Summit Builders",
   "description": "Recent construction and remodeling projects around Fresno, Clovis, and the Central Valley."
 }'::jsonb,
 '[
   {
     "type": "pageHeader",
     "heading": "Project gallery",
     "intro": "Real jobs, real results. Photos from recent builds and remodels around the Central Valley."
   },
   {
     "type": "gallery",
     "heading": "Recent work",
     "items": [
       { "image": "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&q=80", "title": "Custom home build", "location": "Clovis, CA", "tag": "New build" },
       { "image": "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=1200&q=80", "title": "Kitchen remodel", "location": "Fresno, CA", "tag": "Remodel" },
       { "image": "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200&q=80", "title": "Open-concept living room", "location": "Fresno, CA", "tag": "Remodel" },
       { "image": "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=1200&q=80", "title": "Whole-home renovation", "location": "Madera, CA", "tag": "Renovation" },
       { "image": "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=1200&q=80", "title": "Commercial tenant improvement", "location": "Fresno, CA", "tag": "Commercial" },
       { "image": "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1200&q=80", "title": "Foundation & framing", "location": "Selma, CA", "tag": "New build" }
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
   "title": "About | Summit Builders",
   "description": "Family-owned Fresno general contractor with 15+ years of experience. Meet the team behind Summit Builders."
 }'::jsonb,
 '[
   {
     "type": "pageHeader",
     "heading": "About Summit Builders",
     "intro": "A family business built one satisfied customer at a time."
   },
   {
     "type": "about",
     "heading": "Our story",
     "image": "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=1200&q=80",
     "paragraphs": [
       "Summit Builders started with one truck, one crew, and a simple promise: do the job right, charge a fair price, and stand behind the work. Fifteen years and four hundred projects later, that promise hasn''t changed.",
       "We''re a family-owned general contractor based in Fresno. Most of our work comes from referrals and repeat customers, which is exactly how we like it — it means the last job earned the next one.",
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
       { "quote": "They finished our addition on time and on budget, and the crew left the site spotless every day.", "name": "Maria G.", "location": "Fresno" },
       { "quote": "Honest pricing and great communication from the first walkthrough to the final inspection.", "name": "Dave R.", "location": "Clovis" },
       { "quote": "Our kitchen looks like it came out of a magazine.", "name": "Janelle T.", "location": "Sanger" }
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
   "title": "Contact | Summit Builders — Free Estimates",
   "description": "Request a free estimate from Summit Builders. Call (555) 014-2400 or send us your project details."
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
