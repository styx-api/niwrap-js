// This file was auto generated by Styx.
// Do not edit this file directly.

import { Runner, Execution, Metadata, InputPathType, OutputPathType, getGlobalRunner } from 'styxdefs';

const IMG2IMGCOORD_METADATA: Metadata = {
    id: "e341dd3ab33df3c7d15fb067a9430269f15dbe14.boutiques",
    name: "img2imgcoord",
    package: "fsl",
    container_image_tag: "brainlife/fsl:6.0.4-patched2",
};


interface Img2imgcoordParameters {
    "__STYXTYPE__": "img2imgcoord";
    "coordinates_file": string;
    "source_image": InputPathType;
    "dest_image": InputPathType;
    "affine_transform": InputPathType;
    "warp_field"?: InputPathType | null | undefined;
    "pre_warp_affine"?: InputPathType | null | undefined;
    "coords_in_voxels": boolean;
    "coords_in_mm": boolean;
    "verbose": boolean;
    "help": boolean;
}


function dynCargs(
    t: string,
): Function | undefined {
    /**
     * Get build cargs function by command type.
    
     * @param t Command type
    
     * @returns Build cargs function.
     */
    const cargsFuncs = {
        "img2imgcoord": img2imgcoord_cargs,
    };
    return cargsFuncs[t];
}


function dynOutputs(
    t: string,
): Function | undefined {
    /**
     * Get build outputs function by command type.
    
     * @param t Command type
    
     * @returns Build outputs function.
     */
    const outputsFuncs = {
    };
    return outputsFuncs[t];
}


/**
 * Output object returned when calling `img2imgcoord(...)`.
 *
 * @interface
 */
interface Img2imgcoordOutputs {
    /**
     * Output root folder. This is the root folder for all outputs.
     */
    root: OutputPathType;
}


function img2imgcoord_params(
    coordinates_file: string,
    source_image: InputPathType,
    dest_image: InputPathType,
    affine_transform: InputPathType,
    warp_field: InputPathType | null = null,
    pre_warp_affine: InputPathType | null = null,
    coords_in_voxels: boolean = false,
    coords_in_mm: boolean = false,
    verbose: boolean = false,
    help: boolean = false,
): Img2imgcoordParameters {
    /**
     * Build parameters.
    
     * @param coordinates_file Filename containing coordinates
     * @param source_image Filename of source image
     * @param dest_image Filename of destination image
     * @param affine_transform Filename of affine transform (e.g. source2dest.mat)
     * @param warp_field Filename of warpfield (e.g. intermediate2dest_warp.nii.gz)
     * @param pre_warp_affine Filename of pre-warp affine transform (default=identity)
     * @param coords_in_voxels All coordinates in voxels (default)
     * @param coords_in_mm All coordinates in mm
     * @param verbose Verbose mode
     * @param help Display help message
    
     * @returns Parameter dictionary
     */
    const params = {
        "__STYXTYPE__": "img2imgcoord" as const,
        "coordinates_file": coordinates_file,
        "source_image": source_image,
        "dest_image": dest_image,
        "affine_transform": affine_transform,
        "coords_in_voxels": coords_in_voxels,
        "coords_in_mm": coords_in_mm,
        "verbose": verbose,
        "help": help,
    };
    if (warp_field !== null) {
        params["warp_field"] = warp_field;
    }
    if (pre_warp_affine !== null) {
        params["pre_warp_affine"] = pre_warp_affine;
    }
    return params;
}


function img2imgcoord_cargs(
    params: Img2imgcoordParameters,
    execution: Execution,
): string[] {
    /**
     * Build command-line arguments from parameters.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Command-line arguments.
     */
    const cargs: string[] = [];
    cargs.push("img2imgcoord");
    cargs.push((params["coordinates_file"] ?? null));
    cargs.push(
        "-src",
        execution.inputFile((params["source_image"] ?? null))
    );
    cargs.push(
        "-dest",
        execution.inputFile((params["dest_image"] ?? null))
    );
    cargs.push(
        "-xfm",
        execution.inputFile((params["affine_transform"] ?? null))
    );
    if ((params["warp_field"] ?? null) !== null) {
        cargs.push(
            "-warp",
            execution.inputFile((params["warp_field"] ?? null))
        );
    }
    if ((params["pre_warp_affine"] ?? null) !== null) {
        cargs.push(
            "-premat",
            execution.inputFile((params["pre_warp_affine"] ?? null))
        );
    }
    if ((params["coords_in_voxels"] ?? null)) {
        cargs.push("-vox");
    }
    if ((params["coords_in_mm"] ?? null)) {
        cargs.push("-mm");
    }
    if ((params["verbose"] ?? null)) {
        cargs.push("-v");
    }
    if ((params["help"] ?? null)) {
        cargs.push("-help");
    }
    return cargs;
}


function img2imgcoord_outputs(
    params: Img2imgcoordParameters,
    execution: Execution,
): Img2imgcoordOutputs {
    /**
     * Build outputs object containing output file paths and possibly stdout/stderr.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Outputs object.
     */
    const ret: Img2imgcoordOutputs = {
        root: execution.outputFile("."),
    };
    return ret;
}


function img2imgcoord_execute(
    params: Img2imgcoordParameters,
    execution: Execution,
): Img2imgcoordOutputs {
    /**
     * Tool for transforming coordinates between images.
     * 
     * Author: FMRIB Analysis Group, University of Oxford
     * 
     * URL: https://fsl.fmrib.ox.ac.uk/fsl/fslwiki
    
     * @param params The parameters.
     * @param execution The execution object.
    
     * @returns NamedTuple of outputs (described in `Img2imgcoordOutputs`).
     */
    params = execution.params(params)
    const cargs = img2imgcoord_cargs(params, execution)
    const ret = img2imgcoord_outputs(params, execution)
    execution.run(cargs, undefined);
    return ret;
}


function img2imgcoord(
    coordinates_file: string,
    source_image: InputPathType,
    dest_image: InputPathType,
    affine_transform: InputPathType,
    warp_field: InputPathType | null = null,
    pre_warp_affine: InputPathType | null = null,
    coords_in_voxels: boolean = false,
    coords_in_mm: boolean = false,
    verbose: boolean = false,
    help: boolean = false,
    runner: Runner | null = null,
): Img2imgcoordOutputs {
    /**
     * Tool for transforming coordinates between images.
     * 
     * Author: FMRIB Analysis Group, University of Oxford
     * 
     * URL: https://fsl.fmrib.ox.ac.uk/fsl/fslwiki
    
     * @param coordinates_file Filename containing coordinates
     * @param source_image Filename of source image
     * @param dest_image Filename of destination image
     * @param affine_transform Filename of affine transform (e.g. source2dest.mat)
     * @param warp_field Filename of warpfield (e.g. intermediate2dest_warp.nii.gz)
     * @param pre_warp_affine Filename of pre-warp affine transform (default=identity)
     * @param coords_in_voxels All coordinates in voxels (default)
     * @param coords_in_mm All coordinates in mm
     * @param verbose Verbose mode
     * @param help Display help message
     * @param runner Command runner
    
     * @returns NamedTuple of outputs (described in `Img2imgcoordOutputs`).
     */
    runner = runner || getGlobalRunner();
    const execution = runner.startExecution(IMG2IMGCOORD_METADATA);
    const params = img2imgcoord_params(coordinates_file, source_image, dest_image, affine_transform, warp_field, pre_warp_affine, coords_in_voxels, coords_in_mm, verbose, help)
    return img2imgcoord_execute(params, execution);
}


export {
      IMG2IMGCOORD_METADATA,
      Img2imgcoordOutputs,
      Img2imgcoordParameters,
      img2imgcoord,
      img2imgcoord_params,
};
