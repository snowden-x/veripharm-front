"use client"
import { Header } from "@/components/header";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Shield, QrCode, Database, BarChart3, Users, Activity, Code, Play, Copy, Check } from "lucide-react";
import { useState } from "react";

export default function DocsPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <Badge variant="secondary" className="mb-4">
              <Shield className="mr-2 h-4 w-4" />
              API Documentation
            </Badge>
            <h1 className="text-4xl font-bold tracking-tight text-foreground mb-4">
              VeriPharm API Reference
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Complete documentation for the VeriPharm pharmaceutical supply chain verification API
            </p>
          </div>

          <Tabs defaultValue="overview" className="w-full">
            <TabsList className="grid w-full grid-cols-6 mb-8">
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="authentication">Auth</TabsTrigger>
              <TabsTrigger value="endpoints">Endpoints</TabsTrigger>
              <TabsTrigger value="examples">Examples</TabsTrigger>
              <TabsTrigger value="errors">Errors</TabsTrigger>
              <TabsTrigger value="support">Support</TabsTrigger>
            </TabsList>

            <TabsContent value="overview" className="space-y-8">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Shield className="h-5 w-5 text-primary" />
                    About VeriPharm API
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p>
                    The VeriPharm API is a comprehensive pharmaceutical supply chain verification system that provides pharmacy management systems with access to pre-verified medicines and complete supply chain transparency.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                    <div className="space-y-2">
                      <h4 className="font-semibold">Base URL</h4>
                      <code className="bg-muted px-2 py-1 rounded text-sm">http://localhost:8000/api/v1</code>
                    </div>
                    <div className="space-y-2">
                      <h4 className="font-semibold">Content Type</h4>
                      <code className="bg-muted px-2 py-1 rounded text-sm">application/json</code>
                    </div>
                    <div className="space-y-2">
                      <h4 className="font-semibold">Authentication</h4>
                      <code className="bg-muted px-2 py-1 rounded text-sm">Basic Auth / API Key</code>
                    </div>
                    <div className="space-y-2">
                      <h4 className="font-semibold">Rate Limiting</h4>
                      <code className="bg-muted px-2 py-1 rounded text-sm">1000 requests/hour</code>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Key Features</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="flex items-start gap-3">
                      <QrCode className="h-5 w-5 text-primary mt-1" />
                      <div>
                        <h4 className="font-semibold">Drug Verification</h4>
                        <p className="text-sm text-muted-foreground">Verify medicine authenticity using QR codes</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Database className="h-5 w-5 text-primary mt-1" />
                      <div>
                        <h4 className="font-semibold">Drug Catalog</h4>
                        <p className="text-sm text-muted-foreground">Access comprehensive drug information</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <BarChart3 className="h-5 w-5 text-primary mt-1" />
                      <div>
                        <h4 className="font-semibold">Inventory Management</h4>
                        <p className="text-sm text-muted-foreground">Sync and manage pharmacy inventory</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Users className="h-5 w-5 text-primary mt-1" />
                      <div>
                        <h4 className="font-semibold">Pharmacy Registration</h4>
                        <p className="text-sm text-muted-foreground">Register and get API access</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="authentication" className="space-y-8">
              <Card>
                <CardHeader>
                  <CardTitle>Authentication</CardTitle>
                  <CardDescription>
                    VeriPharm API supports two authentication methods
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <h4 className="font-semibold mb-2">1. Basic Authentication</h4>
                    <p className="text-sm text-muted-foreground mb-3">
                      Use your pharmacy credentials for basic authentication
                    </p>
                    <div className="bg-muted p-4 rounded-lg">
                      <code className="text-sm">
                        Authorization: Basic {`{base64(username:password)}`}
                      </code>
                    </div>
                  </div>

                  <Separator />

                  <div>
                    <h4 className="font-semibold mb-2">2. API Key Authentication</h4>
                    <p className="text-sm text-muted-foreground mb-3">
                      Use your API key in the X-API-Key header
                    </p>
                    <div className="bg-muted p-4 rounded-lg">
                      <code className="text-sm">
                        X-API-Key: 55a54646-214b-4f83-9616-6afbc7f0a195
                      </code>
                    </div>
                  </div>

                  <div className="bg-blue-50 dark:bg-blue-950/20 p-4 rounded-lg border border-blue-200 dark:border-blue-800">
                    <h4 className="font-semibold text-blue-900 dark:text-blue-100 mb-2">Getting Your API Key</h4>
                    <p className="text-sm text-blue-800 dark:text-blue-200">
                      Register your pharmacy using the <code className="bg-blue-100 dark:bg-blue-900 px-1 rounded">POST /api/v1/pharmacies/register/</code> endpoint to receive your API key.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="endpoints" className="space-y-8">
              <Card>
                <CardHeader>
                  <CardTitle>Drug Catalog</CardTitle>
                  <CardDescription>Endpoints for accessing drug information</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <div className="border rounded-lg p-4">
                      <div className="flex items-center gap-2 mb-2">
                        <Badge variant="secondary">GET</Badge>
                        <code className="text-sm">/api/v1/drugs/</code>
                      </div>
                      <p className="text-sm text-muted-foreground mb-3">Get a list of all verified drugs in the system</p>
                      <div className="bg-muted p-3 rounded text-sm">
                        <div className="font-semibold mb-2">Response Example:</div>
                        <pre className="text-xs overflow-x-auto">
{`[
  {
    "id": 31,
    "name": "para",
    "qr_code_string": "d018e0538f204faabc40d0502383dfb9",
    "scanned": false,
    "batch_info": {
      "batch_id": "EG5H676",
      "manufacturer": "manufacturer_1",
      "manufacture_date": "2025-07-16",
      "expiry_date": "2026-06-16",
      "drug_category": "painkiller"
    }
  }
]`}
                        </pre>
                      </div>
                    </div>

                    <div className="border rounded-lg p-4">
                      <div className="flex items-center gap-2 mb-2">
                        <Badge variant="secondary">GET</Badge>
                        <code className="text-sm">/api/v1/drugs/search/?name=para</code>
                      </div>
                      <p className="text-sm text-muted-foreground mb-3">Search for drugs by name (case-insensitive partial match)</p>
                      <div className="bg-muted p-3 rounded text-sm">
                        <div className="font-semibold mb-2">Parameters:</div>
                        <div className="space-y-1">
                          <div><code className="bg-background px-1 rounded">name</code> - Search term for drug name (optional)</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Drug Verification</CardTitle>
                  <CardDescription>Verify medicine authenticity using QR codes</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="border rounded-lg p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <Badge variant="secondary">GET</Badge>
                      <code className="text-sm">/api/v1/drugs/verify/{'{qr_code}'}/</code>
                    </div>
                    <p className="text-sm text-muted-foreground mb-3">Verify the authenticity of a medicine using its QR code</p>
                    <div className="bg-muted p-3 rounded text-sm">
                      <div className="font-semibold mb-2">Parameters:</div>
                      <div className="space-y-1 mb-3">
                        <div><code className="bg-background px-1 rounded">qr_code</code> - The unique QR code string of the medicine</div>
                        <div><code className="bg-background px-1 rounded">X-API-Key</code> - API key for authentication (optional - public endpoint)</div>
                      </div>
                      <div className="font-semibold mb-2">Response Example:</div>
                      <pre className="text-xs overflow-x-auto">
{`{
  "verified": true,
  "drug": {
    "id": 31,
    "name": "para",
    "qr_code_string": "d018e0538f204faabc40d0502383dfb9",
    "scanned": false,
    "batch_info": {
      "batch_id": "EG5H676",
      "manufacturer": "manufacturer_1",
      "manufacture_date": "2025-07-16",
      "expiry_date": "2026-06-16",
      "drug_category": "painkiller"
    }
  },
  "supply_chain": [
    {
      "step": "manufactured",
      "date": "2025-07-16",
      "actor": "manufacturer_1",
      "role": "manufacturer"
    }
  ]
}`}
                      </pre>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Inventory Management</CardTitle>
                  <CardDescription>Manage pharmacy inventory</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <div className="border rounded-lg p-4">
                      <div className="flex items-center gap-2 mb-2">
                        <Badge variant="secondary">GET</Badge>
                        <code className="text-sm">/api/v1/inventory/</code>
                      </div>
                      <p className="text-sm text-muted-foreground mb-3">Get current inventory for the authenticated pharmacy</p>
                      <div className="bg-muted p-3 rounded text-sm">
                        <div className="font-semibold mb-2">Response Example:</div>
                        <pre className="text-xs overflow-x-auto">
{`[
  {
    "id": 1,
    "drug_qr_code": "d018e0538f204faabc40d0502383dfb9",
    "drug_name": "para",
    "quantity": 50,
    "last_updated": "2025-08-21T01:00:00Z"
  }
]`}
                        </pre>
                      </div>
                    </div>

                    <div className="border rounded-lg p-4">
                      <div className="flex items-center gap-2 mb-2">
                        <Badge variant="secondary">POST</Badge>
                        <code className="text-sm">/api/v1/inventory/sync/</code>
                      </div>
                      <p className="text-sm text-muted-foreground mb-3">Sync pharmacy inventory with VeriPharm system</p>
                      <div className="bg-muted p-3 rounded text-sm">
                        <div className="font-semibold mb-2">Request Body:</div>
                        <pre className="text-xs overflow-x-auto">
{`{
  "drug_qr_code": "d018e0538f204faabc40d0502383dfb9",
  "quantity": 50
}`}
                        </pre>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Pharmacy Registration</CardTitle>
                  <CardDescription>Register your pharmacy for API access</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="border rounded-lg p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <Badge variant="secondary">POST</Badge>
                      <code className="text-sm">/api/v1/pharmacies/register/</code>
                    </div>
                    <p className="text-sm text-muted-foreground mb-3">Register a new pharmacy for API access</p>
                    <div className="bg-muted p-3 rounded text-sm">
                      <div className="font-semibold mb-2">Request Body:</div>
                      <pre className="text-xs overflow-x-auto">
{`{
  "pharmacy_name": "City Pharmacy",
  "contact_email": "contact@citypharmacy.com"
}`}
                      </pre>
                      <div className="font-semibold mb-2 mt-3">Response Example:</div>
                      <pre className="text-xs overflow-x-auto">
{`{
  "id": 1,
  "key": "550e8400-e29b-41d4-a716-446655440000",
  "pharmacy_name": "City Pharmacy",
  "contact_email": "contact@citypharmacy.com",
  "is_active": true,
  "created_at": "2025-08-21T01:00:00Z",
  "last_used": null
}`}
                      </pre>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>API Usage Statistics</CardTitle>
                  <CardDescription>Monitor your API usage</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="border rounded-lg p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <Badge variant="secondary">GET</Badge>
                      <code className="text-sm">/api/v1/usage/</code>
                    </div>
                    <p className="text-sm text-muted-foreground mb-3">Get API usage statistics for the authenticated pharmacy</p>
                    <div className="bg-muted p-3 rounded text-sm">
                      <div className="font-semibold mb-2">Response Example:</div>
                      <pre className="text-xs overflow-x-auto">
{`[
  {
    "id": 1,
    "api_key_name": "City Pharmacy",
    "endpoint": "/api/v1/drugs/verify/abc123/",
    "timestamp": "2025-08-21T01:00:00Z",
    "response_time": 0.15
  }
]`}
                      </pre>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="examples" className="space-y-8">
              <Card>
                <CardHeader>
                  <CardTitle>Code Examples</CardTitle>
                  <CardDescription>Ready-to-use code snippets for common operations</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <h4 className="font-semibold mb-3">JavaScript/Node.js</h4>
                    <div className="bg-muted p-4 rounded-lg">
                      <pre className="text-sm overflow-x-auto">
{`// Verify a drug using QR code
const verifyDrug = async (qrCode) => {
  const response = await fetch(\`http://localhost:8000/api/v1/drugs/verify/\${qrCode}/\`, {
    method: 'GET',
    headers: {
      'X-API-Key': 'your-api-key-here'
    }
  });
  
  const data = await response.json();
  return data;
};

// Get drug catalog
const getDrugCatalog = async () => {
  const response = await fetch('http://localhost:8000/api/v1/drugs/', {
    method: 'GET',
    headers: {
      'Authorization': 'Basic ' + btoa('username:password')
    }
  });
  
  const data = await response.json();
  return data;
};`}
                      </pre>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-3">Python</h4>
                    <div className="bg-muted p-4 rounded-lg">
                      <pre className="text-sm overflow-x-auto">
{`import requests

# Verify a drug using QR code
def verify_drug(qr_code, api_key):
    url = f"http://localhost:8000/api/v1/drugs/verify/{qr_code}/"
    headers = {'X-API-Key': api_key}
    
    response = requests.get(url, headers=headers)
    return response.json()

# Get drug catalog
def get_drug_catalog(username, password):
    url = "http://localhost:8000/api/v1/drugs/"
    auth = (username, password)
    
    response = requests.get(url, auth=auth)
    return response.json()`}
                      </pre>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-3">cURL</h4>
                    <div className="bg-muted p-4 rounded-lg">
                      <pre className="text-sm overflow-x-auto">
{`# Verify a drug
curl -X GET "http://localhost:8000/api/v1/drugs/verify/d018e0538f204faabc40d0502383dfb9/" \\
  -H "X-API-Key: your-api-key-here"

# Get drug catalog with basic auth
curl -X GET "http://localhost:8000/api/v1/drugs/" \\
  -u "username:password"

# Register a pharmacy
curl -X POST "http://localhost:8000/api/v1/pharmacies/register/" \\
  -H "Content-Type: application/json" \\
  -d '{"pharmacy_name": "City Pharmacy", "contact_email": "contact@citypharmacy.com"}'`}
                      </pre>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="errors" className="space-y-8">
              <Card>
                <CardHeader>
                  <CardTitle>Error Codes & Responses</CardTitle>
                  <CardDescription>Common error responses and their meanings</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-4">
                    <div className="border rounded-lg p-4">
                      <div className="flex items-center gap-2 mb-2">
                        <Badge variant="destructive">400</Badge>
                        <span className="font-semibold">Bad Request</span>
                      </div>
                      <p className="text-sm text-muted-foreground mb-2">Invalid data provided in the request</p>
                      <div className="bg-muted p-3 rounded text-sm">
                        <pre className="text-xs overflow-x-auto">
{`{
  "drug_qr_code": ["This field is required."],
  "quantity": ["Ensure this value is greater than or equal to 0."]
}`}
                        </pre>
                      </div>
                    </div>

                    <div className="border rounded-lg p-4">
                      <div className="flex items-center gap-2 mb-2">
                        <Badge variant="destructive">401</Badge>
                        <span className="font-semibold">Unauthorized</span>
                      </div>
                      <p className="text-sm text-muted-foreground mb-2">Authentication credentials were not provided or are invalid</p>
                      <div className="bg-muted p-3 rounded text-sm">
                        <pre className="text-xs overflow-x-auto">
{`{
  "detail": "Authentication credentials were not provided."
}`}
                        </pre>
                      </div>
                    </div>

                    <div className="border rounded-lg p-4">
                      <div className="flex items-center gap-2 mb-2">
                        <Badge variant="destructive">404</Badge>
                        <span className="font-semibold">Not Found</span>
                      </div>
                      <p className="text-sm text-muted-foreground mb-2">The requested resource was not found</p>
                      <div className="bg-muted p-3 rounded text-sm">
                        <pre className="text-xs overflow-x-auto">
{`{
  "verified": false,
  "error": "Drug not found or invalid QR code"
}`}
                        </pre>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="support" className="space-y-8">
              <Card>
                <CardHeader>
                  <CardTitle>Need Help?</CardTitle>
                  <CardDescription>Get support and stay updated with VeriPharm API</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                      <h4 className="font-semibold">Contact Information</h4>
                      <div className="space-y-2">
                        <div className="flex items-center gap-2">
                          <Activity className="h-4 w-4 text-primary" />
                          <span className="text-sm">Email: info@veripharm.com</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Shield className="h-4 w-4 text-primary" />
                          <span className="text-sm">Terms of Service: <a href="https://www.veripharm.com/terms/" className="text-primary hover:underline">veripharm.com/terms</a></span>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <h4 className="font-semibold">API Status</h4>
                      <div className="space-y-2">
                        <div className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                          <span className="text-sm">All systems operational</span>
                        </div>
                        <div className="text-sm text-muted-foreground">
                          Last updated: {new Date().toLocaleDateString()}
                        </div>
                      </div>
                    </div>
                  </div>

                  <Separator />

                  <div className="text-center">
                    <h4 className="font-semibold mb-4">Ready to get started?</h4>
                    <div className="flex gap-4 justify-center">
                      <Button asChild>
                        <a href="mailto:info@veripharm.com">Contact Support</a>
                      </Button>
                      <Button variant="outline" asChild>
                        <a href="https://www.veripharm.com/terms/">View Terms</a>
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
}
