// This file was auto generated by Styx.
// Do not edit this file directly.

import { Runner, Execution, Metadata, InputPathType, OutputPathType, getGlobalRunner } from 'styxdefs';

const DISTANCEMAP_METADATA: Metadata = {
    id: "8c91d70b066dae9f7112e48ed64c3d44b99e5208.boutiques",
    name: "distancemap",
    package: "fsl",
    container_image_tag: "brainlife/fsl:6.0.4-patched2",
};


interface DistancemapParameters {
    "__STYXTYPE__": "distancemap";
    "input_image": InputPathType;
    "output_image": string;
    "mask_image"?: InputPathType | null | undefined;
    "second_image"?: InputPathType | null | undefined;
    "local_maxima_image"?: InputPathType | null | undefined;
    "segmented_image"?: InputPathType | null | undefined;
    "invert_flag": boolean;
    "interpolate_values"?: InputPathType | null | undefined;
    "verbose_flag": boolean;
    "help_flag": boolean;
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
        "distancemap": distancemap_cargs,
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
        "distancemap": distancemap_outputs,
    };
    return outputsFuncs[t];
}


/**
 * Output object returned when calling `distancemap(...)`.
 *
 * @interface
 */
interface DistancemapOutputs {
    /**
     * Output root folder. This is the root folder for all outputs.
     */
    root: OutputPathType;
    /**
     * Output distance map image
     */
    output_distancemap: OutputPathType;
    /**
     * Output local maxima image
     */
    output_local_maxima: OutputPathType | null;
    /**
     * Output segmented distance map image
     */
    output_segmented_image: OutputPathType | null;
}


function distancemap_params(
    input_image: InputPathType,
    output_image: string,
    mask_image: InputPathType | null = null,
    second_image: InputPathType | null = null,
    local_maxima_image: InputPathType | null = null,
    segmented_image: InputPathType | null = null,
    invert_flag: boolean = false,
    interpolate_values: InputPathType | null = null,
    verbose_flag: boolean = false,
    help_flag: boolean = false,
): DistancemapParameters {
    /**
     * Build parameters.
    
     * @param input_image Input image filename (calc distance to non-zero voxels)
     * @param output_image Output image filename
     * @param mask_image Mask image filename (only calc values at these voxels)
     * @param second_image Second image filename (calc closest distance of this and primary input image, using non-zero voxels, negative distances mean this secondary image is the closer one)
     * @param local_maxima_image Local maxima output image filename
     * @param segmented_image Segmented output image filename (unique value per segment is local maxima label)
     * @param invert_flag Invert input image
     * @param interpolate_values Filename for values to interpolate (sparse sampling interpolation)
     * @param verbose_flag Switch on diagnostic messages
     * @param help_flag Display help message
    
     * @returns Parameter dictionary
     */
    const params = {
        "__STYXTYPE__": "distancemap" as const,
        "input_image": input_image,
        "output_image": output_image,
        "invert_flag": invert_flag,
        "verbose_flag": verbose_flag,
        "help_flag": help_flag,
    };
    if (mask_image !== null) {
        params["mask_image"] = mask_image;
    }
    if (second_image !== null) {
        params["second_image"] = second_image;
    }
    if (local_maxima_image !== null) {
        params["local_maxima_image"] = local_maxima_image;
    }
    if (segmented_image !== null) {
        params["segmented_image"] = segmented_image;
    }
    if (interpolate_values !== null) {
        params["interpolate_values"] = interpolate_values;
    }
    return params;
}


function distancemap_cargs(
    params: DistancemapParameters,
    execution: Execution,
): string[] {
    /**
     * Build command-line arguments from parameters.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Command-line arguments.
     */
    const cargs: string[] = [];
    cargs.push("distancemap");
    cargs.push(
        "-i",
        execution.inputFile((params["input_image"] ?? null))
    );
    cargs.push(
        "-o",
        (params["output_image"] ?? null)
    );
    if ((params["mask_image"] ?? null) !== null) {
        cargs.push(
            "-m",
            execution.inputFile((params["mask_image"] ?? null))
        );
    }
    if ((params["second_image"] ?? null) !== null) {
        cargs.push(
            "--secondim",
            execution.inputFile((params["second_image"] ?? null))
        );
    }
    if ((params["local_maxima_image"] ?? null) !== null) {
        cargs.push(
            "-l",
            execution.inputFile((params["local_maxima_image"] ?? null))
        );
    }
    if ((params["segmented_image"] ?? null) !== null) {
        cargs.push(
            "-s",
            execution.inputFile((params["segmented_image"] ?? null))
        );
    }
    if ((params["invert_flag"] ?? null)) {
        cargs.push("--invert");
    }
    if ((params["interpolate_values"] ?? null) !== null) {
        cargs.push(
            "--interp",
            execution.inputFile((params["interpolate_values"] ?? null))
        );
    }
    if ((params["verbose_flag"] ?? null)) {
        cargs.push("-v");
    }
    if ((params["help_flag"] ?? null)) {
        cargs.push("-h");
    }
    return cargs;
}


function distancemap_outputs(
    params: DistancemapParameters,
    execution: Execution,
): DistancemapOutputs {
    /**
     * Build outputs object containing output file paths and possibly stdout/stderr.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Outputs object.
     */
    const ret: DistancemapOutputs = {
        root: execution.outputFile("."),
        output_distancemap: execution.outputFile([(params["output_image"] ?? null)].join('')),
        output_local_maxima: ((params["local_maxima_image"] ?? null) !== null) ? execution.outputFile([path.basename((params["local_maxima_image"] ?? null))].join('')) : null,
        output_segmented_image: ((params["segmented_image"] ?? null) !== null) ? execution.outputFile([path.basename((params["segmented_image"] ?? null))].join('')) : null,
    };
    return ret;
}


function distancemap_execute(
    params: DistancemapParameters,
    execution: Execution,
): DistancemapOutputs {
    /**
     * A tool to calculate distance maps using FSL.
     * 
     * Author: FMRIB Analysis Group, University of Oxford
     * 
     * URL: https://fsl.fmrib.ox.ac.uk/fsl/fslwiki
    
     * @param params The parameters.
     * @param execution The execution object.
    
     * @returns NamedTuple of outputs (described in `DistancemapOutputs`).
     */
    params = execution.params(params)
    const cargs = distancemap_cargs(params, execution)
    const ret = distancemap_outputs(params, execution)
    execution.run(cargs, undefined);
    return ret;
}


function distancemap(
    input_image: InputPathType,
    output_image: string,
    mask_image: InputPathType | null = null,
    second_image: InputPathType | null = null,
    local_maxima_image: InputPathType | null = null,
    segmented_image: InputPathType | null = null,
    invert_flag: boolean = false,
    interpolate_values: InputPathType | null = null,
    verbose_flag: boolean = false,
    help_flag: boolean = false,
    runner: Runner | null = null,
): DistancemapOutputs {
    /**
     * A tool to calculate distance maps using FSL.
     * 
     * Author: FMRIB Analysis Group, University of Oxford
     * 
     * URL: https://fsl.fmrib.ox.ac.uk/fsl/fslwiki
    
     * @param input_image Input image filename (calc distance to non-zero voxels)
     * @param output_image Output image filename
     * @param mask_image Mask image filename (only calc values at these voxels)
     * @param second_image Second image filename (calc closest distance of this and primary input image, using non-zero voxels, negative distances mean this secondary image is the closer one)
     * @param local_maxima_image Local maxima output image filename
     * @param segmented_image Segmented output image filename (unique value per segment is local maxima label)
     * @param invert_flag Invert input image
     * @param interpolate_values Filename for values to interpolate (sparse sampling interpolation)
     * @param verbose_flag Switch on diagnostic messages
     * @param help_flag Display help message
     * @param runner Command runner
    
     * @returns NamedTuple of outputs (described in `DistancemapOutputs`).
     */
    runner = runner || getGlobalRunner();
    const execution = runner.startExecution(DISTANCEMAP_METADATA);
    const params = distancemap_params(input_image, output_image, mask_image, second_image, local_maxima_image, segmented_image, invert_flag, interpolate_values, verbose_flag, help_flag)
    return distancemap_execute(params, execution);
}


export {
      DISTANCEMAP_METADATA,
      DistancemapOutputs,
      DistancemapParameters,
      distancemap,
      distancemap_params,
};
