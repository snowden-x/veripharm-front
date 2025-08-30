import Link from "next/link";
import { Header } from "@/components/header";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Shield, QrCode, Database, BarChart3, Zap, Globe, Lock, CheckCircle } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/20">
      <Header />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 sm:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <Badge variant="secondary" className="mb-6">
              <Shield className="mr-2 h-4 w-4" />
              API v1.0
            </Badge>
            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-6xl">
              VeriPharm API
            </h1>
            <p className="mt-6 text-xl leading-8 text-muted-foreground">
              Verified pharmaceutical supply chain verification API. Provides pharmacy management systems with access to pre-verified medicines and complete supply chain transparency.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Button size="lg" asChild>
                <Link href="/docs">Get Started</Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href="/docs">View Documentation</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 sm:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Everything you need for pharmaceutical verification
            </h2>
            <p className="mt-6 text-lg leading-8 text-muted-foreground">
              Our comprehensive API provides all the tools needed to verify medicine authenticity and manage pharmaceutical supply chains.
            </p>
          </div>
          
          <div className="mx-auto mt-16 max-w-7xl">
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              <Card>
                <CardHeader>
                  <QrCode className="h-8 w-8 text-primary" />
                  <CardTitle>Drug Verification</CardTitle>
                  <CardDescription>
                    Verify medicine authenticity using QR codes with complete supply chain transparency
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card>
                <CardHeader>
                  <Database className="h-8 w-8 text-primary" />
                  <CardTitle>Drug Catalog</CardTitle>
                  <CardDescription>
                    Access comprehensive drug information including batch details and manufacturer data
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card>
                <CardHeader>
                  <BarChart3 className="h-8 w-8 text-primary" />
                  <CardTitle>Inventory Management</CardTitle>
                  <CardDescription>
                    Sync and manage pharmacy inventory with real-time updates
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card>
                <CardHeader>
                  <Shield className="h-8 w-8 text-primary" />
                  <CardTitle>Supply Chain Transparency</CardTitle>
                  <CardDescription>
                    Track every step of the pharmaceutical supply chain from manufacturer to pharmacy
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card>
                <CardHeader>
                  <Zap className="h-8 w-8 text-primary" />
                  <CardTitle>Fast & Reliable</CardTitle>
                  <CardDescription>
                    High-performance API with sub-second response times for critical verification needs
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card>
                <CardHeader>
                  <Lock className="h-8 w-8 text-primary" />
                  <CardTitle>Secure Authentication</CardTitle>
                  <CardDescription>
                    Enterprise-grade security with API key authentication and encrypted communications
                  </CardDescription>
                </CardHeader>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* API Endpoints Preview */}
      <section className="py-20 sm:py-32 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Powerful API Endpoints
            </h2>
            <p className="mt-6 text-lg leading-8 text-muted-foreground">
              Explore our comprehensive API endpoints designed for pharmaceutical supply chain management
            </p>
          </div>

          <div className="mx-auto mt-16 max-w-4xl">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    Drug Verification
                  </CardTitle>
                  <CardDescription>GET /api/v1/drugs/verify/{'{qr_code}'}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Verify medicine authenticity and get complete supply chain information
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    Drug Catalog
                  </CardTitle>
                  <CardDescription>GET /api/v1/drugs/</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Access comprehensive drug information and search capabilities
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    Inventory Sync
                  </CardTitle>
                  <CardDescription>POST /api/v1/inventory/sync/</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Synchronize pharmacy inventory with the VeriPharm system
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    Pharmacy Registration
                  </CardTitle>
                  <CardDescription>POST /api/v1/pharmacies/register/</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Register your pharmacy and get API access credentials
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>

          <div className="mt-12 text-center">
            <Button size="lg" asChild>
              <Link href="/docs">View All Endpoints</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 sm:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Ready to get started?
            </h2>
            <p className="mt-6 text-lg leading-8 text-muted-foreground">
              Join pharmacies worldwide in using the most trusted pharmaceutical verification API
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Button size="lg" asChild>
                <Link href="/docs">Start Building</Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href="/docs">View Examples</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            <div>
              <div className="flex items-center space-x-2">
                <Shield className="h-6 w-6 text-primary" />
                <span className="text-lg font-bold">VeriPharm</span>
              </div>
              <p className="mt-4 text-sm text-muted-foreground">
                Verified pharmaceutical supply chain verification API
              </p>
            </div>
            
            <div>
              <h3 className="text-sm font-semibold">API</h3>
              <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                <li><Link href="/docs" className="hover:text-foreground">Documentation</Link></li>
                <li><Link href="/docs" className="hover:text-foreground">Endpoints</Link></li>
                <li><Link href="/docs" className="hover:text-foreground">Authentication</Link></li>
              </ul>
            </div>

            <div>
              <h3 className="text-sm font-semibold">Support</h3>
              <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                <li><a href="mailto:info@veripharm.com" className="hover:text-foreground">Contact</a></li>
                <li><Link href="/docs" className="hover:text-foreground">Help Center</Link></li>
                <li><Link href="/docs" className="hover:text-foreground">Status</Link></li>
              </ul>
            </div>

            <div>
              <h3 className="text-sm font-semibold">Legal</h3>
              <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                <li><a href="https://www.veripharm.com/terms/" className="hover:text-foreground">Terms of Service</a></li>
                <li><Link href="/docs" className="hover:text-foreground">Privacy Policy</Link></li>
                <li><Link href="/docs" className="hover:text-foreground">License</Link></li>
              </ul>
            </div>
          </div>
          
          <div className="mt-12 border-t pt-8 text-center">
            <p className="text-sm text-muted-foreground">
              © 2025 VeriPharm. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
