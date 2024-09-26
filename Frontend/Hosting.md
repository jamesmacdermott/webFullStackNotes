### Publish Page onto Internet

A good way to host our small or personal websites is using
	GitHub Pages

https://youtu.be/p1QU3kLFPdg?si=VgOUVw0iWqyIoF_v

Here's how we can do that

1. Create/add website files to a github repository
2. Go to settings of repository and go to pages tab
3. Change source to main and save
		GitHub pages will now take our code and upload it onto the internet - we refresh after a few minutes and github will then provide us with a url
4. At first, our hosted page will return a 404, hence we must add our main html page eg. ../page.html
	However if we name our main html "index.html" we will not have to add this extra part to the URL

### Domains

#### Get a new Domain Name

- Find a domain provider (domain registrars) that will sell one
	- NameSilo
	- Dynadot
	- Google Domains
	- HostGator
	- GoDaddy
	- Hover

The domain name will need to be linked to an IP address:

1. Search in google - dns lookup
2. mxtoolbox
3. Search up our current domain name (github provided one)
4. This will give us an IP address
5. Click it and copy paste it into DNS records table
6. Do this for all IP addresses provided

Now we need to set up our subdomain : www.

1. Add new record (now a CNAME record)
	1. While a record links our domain to the IP address
	2. CNAME record links a domain to another
2. Input the host - www
3. Input the target - our github provided domain
4. Put all TTLs to 5 min

1. Now go back into our pages tab
2. Input our custom domain name we set up


Now we add our security - HTTPS

1. Go back to git hub pages
2. Click enforce HTTPS