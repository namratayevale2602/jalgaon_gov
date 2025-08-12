<?php

// namespace App\Http\Controllers\Api;

// use App\Http\Controllers\Controller;
// use App\Models\District;
// use Illuminate\Http\Request;

// class DistrictController extends Controller
// {
//     /**
//      * Display district information
//      *
//      * @return \Illuminate\Http\JsonResponse
//      */
//     public function index()
//     {
//         try {
//             $district = District::first();
            
//             if (!$district) {
//                 return response()->json([
//                     'success' => false,
//                     'message' => 'District data not found'
//                 ], 404);
//             }

//             return response()->json([
//                 'success' => true,
//                 'data' => [
//                     'name' => $district->name,
//                     'description' => $district->description,
//                     'population' => $district->population,
//                     'area' => $district->area,
//                     'literacy_rate' => $district->literacy_rate,
//                     'villages_count' => $district->villages_count,
//                     'image_url' => $district->image_path ? asset('uploads/'.$district->image_path) : null,
//                 ]
//             ]);
//         } catch (\Exception $e) {
//             return response()->json([
//                 'success' => false,
//                 'message' => 'Failed to fetch district data',
//                 'error' => $e->getMessage()
//             ], 500);
//         }
//     }

//     /**
//      * Update district information
//      *
//      * @param  \Illuminate\Http\Request  $request
//      * @return \Illuminate\Http\JsonResponse
//      */
//     public function update(Request $request)
//     {
//         try {
//             $district = District::firstOrFail();
            
//             $validated = $request->validate([
//                 'name' => 'sometimes|string|max:255',
//                 'description' => 'sometimes|string',
//                 'population' => 'sometimes|string|max:255',
//                 'area' => 'sometimes|string|max:255',
//                 'literacy_rate' => 'sometimes|string|max:255',
//                 'villages_count' => 'sometimes|string|max:255',
//             ]);

//             $district->update($validated);

//             return response()->json([
//                 'success' => true,
//                 'message' => 'District information updated successfully',
//                 'data' => $district
//             ]);
//         } catch (\Exception $e) {
//             return response()->json([
//                 'success' => false,
//                 'message' => 'Failed to update district information',
//                 'error' => $e->getMessage()
//             ], 500);
//         }
//     }
// }