{
  "swagger": "2.0",
  "info": {
    "title": "VeriPharm API",
    "description": "Verified pharmaceutical supply chain verification API. Provides pharmacy management systems with access to pre-verified medicines and complete supply chain transparency.",
    "termsOfService": "https://www.veripharm.com/terms/",
    "contact": {
      "email": "contact@veripharm.com"
    },
    "license": {
      "name": "Proprietary License"
    },
    "version": "v1"
  },
  "host": "localhost:8000",
  "schemes": [
    "http"
  ],
  "basePath": "/api/v1",
  "consumes": [
    "application/json"
  ],
  "produces": [
    "application/json"
  ],
  "securityDefinitions": {
    "Basic": {
      "type": "basic"
    }
  },
  "security": [
    {
      "Basic": []
    }
  ],
  "paths": {
    "/drugs/": {
      "get": {
        "operationId": "drugs_list",
        "summary": "Get Drug Catalog",
        "description": "Get a list of all verified drugs in the system",
        "parameters": [],
        "responses": {
          "200": {
            "description": "List of all drugs retrieved successfully",
            "examples": {
              "application/json": [
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
              ]
            }
          }
        },
        "tags": [
          "Drug Catalog"
        ]
      },
      "parameters": []
    },
    "/drugs/search/": {
      "get": {
        "operationId": "drugs_search_list",
        "summary": "Search Drugs by Name",
        "description": "Search for drugs by name (case-insensitive partial match)",
        "parameters": [
          {
            "name": "name",
            "in": "query",
            "description": "Search term for drug name (optional - if not provided, returns all drugs)",
            "required": false,
            "type": "string",
            "example": "para"
          }
        ],
        "responses": {
          "200": {
            "description": "Search results retrieved successfully",
            "examples": {
              "application/json": [
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
              ]
            }
          }
        },
        "tags": [
          "Drug Search"
        ]
      },
      "parameters": []
    },
    "/drugs/verify/{qr_code}/": {
      "get": {
        "operationId": "drugs_verify_read",
        "summary": "Verify Drug Authenticity",
        "description": "Verify the authenticity of a medicine using its QR code",
        "parameters": [
          {
            "name": "qr_code",
            "in": "path",
            "description": "The unique QR code string of the medicine",
            "required": true,
            "type": "string",
            "example": "d018e0538f204faabc40d0502383dfb9"
          },
          {
            "name": "X-API-Key",
            "in": "header",
            "description": "API key for authentication (optional - public endpoint)",
            "required": false,
            "type": "string",
            "example": "55a54646-214b-4f83-9616-6afbc7f0a195"
          }
        ],
        "responses": {
          "200": {
            "description": "Drug verified successfully",
            "examples": {
              "application/json": {
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
              }
            }
          },
          "404": {
            "description": "Drug not found",
            "examples": {
              "application/json": {
                "verified": false,
                "error": "Drug not found or invalid QR code"
              }
            }
          }
        },
        "tags": [
          "Drug Verification"
        ]
      },
      "parameters": [
        {
          "name": "qr_code",
          "in": "path",
          "required": true,
          "type": "string"
        }
      ]
    },
    "/inventory/": {
      "get": {
        "operationId": "inventory_list",
        "summary": "Get Pharmacy Inventory",
        "description": "Get current inventory for the authenticated pharmacy",
        "parameters": [],
        "responses": {
          "200": {
            "description": "Inventory retrieved successfully",
            "examples": {
              "application/json": [
                {
                  "id": 1,
                  "drug_qr_code": "d018e0538f204faabc40d0502383dfb9",
                  "drug_name": "para",
                  "quantity": 50,
                  "last_updated": "2025-08-21T01:00:00Z"
                }
              ]
            }
          },
          "401": {
            "description": "Authentication required",
            "examples": {
              "application/json": {
                "detail": "Authentication credentials were not provided."
              }
            }
          }
        },
        "tags": [
          "Inventory Management"
        ]
      },
      "parameters": []
    },
    "/inventory/sync/": {
      "post": {
        "operationId": "inventory_sync_create",
        "summary": "Sync Inventory",
        "description": "Sync pharmacy inventory with VeriPharm system",
        "parameters": [
          {
            "name": "data",
            "in": "body",
            "required": true,
            "schema": {
              "$ref": "#/definitions/InventorySync"
            }
          }
        ],
        "responses": {
          "200": {
            "description": "Inventory synced successfully",
            "examples": {
              "application/json": {
                "message": "Inventory updated successfully",
                "drug_qr_code": "d018e0538f204faabc40d0502383dfb9",
                "quantity": 50
              }
            }
          },
          "400": {
            "description": "Invalid data provided",
            "examples": {
              "application/json": {
                "drug_qr_code": [
                  "This field is required."
                ],
                "quantity": [
                  "Ensure this value is greater than or equal to 0."
                ]
              }
            }
          },
          "401": {
            "description": "Authentication required",
            "examples": {
              "application/json": {
                "detail": "Authentication credentials were not provided."
              }
            }
          }
        },
        "tags": [
          "Inventory Management"
        ]
      },
      "parameters": []
    },
    "/pharmacies/register/": {
      "post": {
        "operationId": "pharmacies_register_create",
        "summary": "Register Pharmacy",
        "description": "Register a new pharmacy for API access",
        "parameters": [
          {
            "name": "data",
            "in": "body",
            "required": true,
            "schema": {
              "$ref": "#/definitions/APIKeyCreate"
            }
          }
        ],
        "responses": {
          "201": {
            "description": "Pharmacy registered successfully",
            "examples": {
              "application/json": {
                "id": 1,
                "key": "550e8400-e29b-41d4-a716-446655440000",
                "pharmacy_name": "City Pharmacy",
                "contact_email": "contact@citypharmacy.com",
                "is_active": true,
                "created_at": "2025-08-21T01:00:00Z",
                "last_used": null
              }
            }
          },
          "400": {
            "description": "Invalid data provided",
            "examples": {
              "application/json": {
                "pharmacy_name": [
                  "This field is required."
                ],
                "contact_email": [
                  "Enter a valid email address."
                ]
              }
            }
          }
        },
        "tags": [
          "Pharmacy Registration"
        ]
      },
      "parameters": []
    },
    "/usage/": {
      "get": {
        "operationId": "usage_list",
        "summary": "Get API Usage Statistics",
        "description": "Get API usage statistics for the authenticated pharmacy",
        "parameters": [],
        "responses": {
          "200": {
            "description": "Usage statistics retrieved successfully",
            "examples": {
              "application/json": [
                {
                  "id": 1,
                  "api_key_name": "City Pharmacy",
                  "endpoint": "/api/v1/drugs/verify/abc123/",
                  "timestamp": "2025-08-21T01:00:00Z",
                  "response_time": 0.15
                }
              ]
            }
          },
          "401": {
            "description": "Authentication required",
            "examples": {
              "application/json": {
                "detail": "Authentication credentials were not provided."
              }
            }
          }
        },
        "tags": [
          "API Usage"
        ]
      },
      "parameters": []
    }
  },
  "definitions": {
    "InventorySync": {
      "required": [
        "drug_qr_code",
        "quantity"
      ],
      "type": "object",
      "properties": {
        "drug_qr_code": {
          "title": "Drug qr code",
          "type": "string",
          "maxLength": 255,
          "minLength": 1
        },
        "quantity": {
          "title": "Quantity",
          "type": "integer",
          "minimum": 0
        }
      }
    },
    "APIKeyCreate": {
      "required": [
        "pharmacy_name",
        "contact_email"
      ],
      "type": "object",
      "properties": {
        "pharmacy_name": {
          "title": "Pharmacy name",
          "type": "string",
          "maxLength": 100,
          "minLength": 1
        },
        "contact_email": {
          "title": "Contact email",
          "type": "string",
          "format": "email",
          "maxLength": 254,
          "minLength": 1
        }
      }
    }
  }
}