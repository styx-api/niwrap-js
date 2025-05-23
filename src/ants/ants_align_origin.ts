// This file was auto generated by Styx.
// Do not edit this file directly.

import { Runner, Execution, Metadata, InputPathType, OutputPathType, getGlobalRunner } from 'styxdefs';

const ANTS_ALIGN_ORIGIN_METADATA: Metadata = {
    id: "74cc71ee1dbe0d0c58e8719cd30215507f2ae81e.boutiques",
    name: "antsAlignOrigin",
    package: "ants",
    container_image_tag: "antsx/ants:v2.5.3",
};


interface AntsAlignOriginParameters {
    "__STYXTYPE__": "antsAlignOrigin";
    "dimensionality"?: 2 | 3 | null | undefined;
    "input": InputPathType;
    "reference_image": InputPathType;
    "output": string;
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
        "antsAlignOrigin": ants_align_origin_cargs,
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
        "antsAlignOrigin": ants_align_origin_outputs,
    };
    return outputsFuncs[t];
}


/**
 * Output object returned when calling `ants_align_origin(...)`.
 *
 * @interface
 */
interface AntsAlignOriginOutputs {
    /**
     * Output root folder. This is the root folder for all outputs.
     */
    root: OutputPathType;
    /**
     * The output is the aligned image.
     */
    aligned_image: OutputPathType;
}


function ants_align_origin_params(
    input: InputPathType,
    reference_image: InputPathType,
    output: string,
    dimensionality: 2 | 3 | null = null,
): AntsAlignOriginParameters {
    /**
     * Build parameters.
    
     * @param input Currently, the only input objects supported are image objects. However, the current framework allows for warping of other objects such as meshes and point sets.
     * @param reference_image For warping input images, the reference image defines the spacing, origin, size, and direction of the output warped image.
     * @param output One can either output the warped image or, if the boolean is set, one can print out the displacement field based on the composite transform and the reference image.
     * @param dimensionality This option forces the image to be treated as a specified-dimensional image. If not specified, antsWarp tries to infer the dimensionality from the input image.
    
     * @returns Parameter dictionary
     */
    const params = {
        "__STYXTYPE__": "antsAlignOrigin" as const,
        "input": input,
        "reference_image": reference_image,
        "output": output,
    };
    if (dimensionality !== null) {
        params["dimensionality"] = dimensionality;
    }
    return params;
}


function ants_align_origin_cargs(
    params: AntsAlignOriginParameters,
    execution: Execution,
): string[] {
    /**
     * Build command-line arguments from parameters.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Command-line arguments.
     */
    const cargs: string[] = [];
    cargs.push("antsAlignOrigin");
    if ((params["dimensionality"] ?? null) !== null) {
        cargs.push(
            "--dimensionality",
            String((params["dimensionality"] ?? null))
        );
    }
    cargs.push(
        "--input",
        execution.inputFile((params["input"] ?? null))
    );
    cargs.push(
        "--reference-image",
        execution.inputFile((params["reference_image"] ?? null))
    );
    cargs.push(
        "--output",
        (params["output"] ?? null)
    );
    return cargs;
}


function ants_align_origin_outputs(
    params: AntsAlignOriginParameters,
    execution: Execution,
): AntsAlignOriginOutputs {
    /**
     * Build outputs object containing output file paths and possibly stdout/stderr.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Outputs object.
     */
    const ret: AntsAlignOriginOutputs = {
        root: execution.outputFile("."),
        aligned_image: execution.outputFile([(params["output"] ?? null)].join('')),
    };
    return ret;
}


function ants_align_origin_execute(
    params: AntsAlignOriginParameters,
    execution: Execution,
): AntsAlignOriginOutputs {
    /**
     * antsAlignOrigin, applied to an input image, transforms it according to a reference image and a transform (or a set of transforms).
     * 
     * Author: ANTs Developers
     * 
     * URL: https://github.com/ANTsX/ANTs
    
     * @param params The parameters.
     * @param execution The execution object.
    
     * @returns NamedTuple of outputs (described in `AntsAlignOriginOutputs`).
     */
    params = execution.params(params)
    const cargs = ants_align_origin_cargs(params, execution)
    const ret = ants_align_origin_outputs(params, execution)
    execution.run(cargs, undefined);
    return ret;
}


function ants_align_origin(
    input: InputPathType,
    reference_image: InputPathType,
    output: string,
    dimensionality: 2 | 3 | null = null,
    runner: Runner | null = null,
): AntsAlignOriginOutputs {
    /**
     * antsAlignOrigin, applied to an input image, transforms it according to a reference image and a transform (or a set of transforms).
     * 
     * Author: ANTs Developers
     * 
     * URL: https://github.com/ANTsX/ANTs
    
     * @param input Currently, the only input objects supported are image objects. However, the current framework allows for warping of other objects such as meshes and point sets.
     * @param reference_image For warping input images, the reference image defines the spacing, origin, size, and direction of the output warped image.
     * @param output One can either output the warped image or, if the boolean is set, one can print out the displacement field based on the composite transform and the reference image.
     * @param dimensionality This option forces the image to be treated as a specified-dimensional image. If not specified, antsWarp tries to infer the dimensionality from the input image.
     * @param runner Command runner
    
     * @returns NamedTuple of outputs (described in `AntsAlignOriginOutputs`).
     */
    runner = runner || getGlobalRunner();
    const execution = runner.startExecution(ANTS_ALIGN_ORIGIN_METADATA);
    const params = ants_align_origin_params(input, reference_image, output, dimensionality)
    return ants_align_origin_execute(params, execution);
}


export {
      ANTS_ALIGN_ORIGIN_METADATA,
      AntsAlignOriginOutputs,
      AntsAlignOriginParameters,
      ants_align_origin,
      ants_align_origin_params,
};
