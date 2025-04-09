// This file was auto generated by Styx.
// Do not edit this file directly.

import { Runner, Execution, Metadata, InputPathType, OutputPathType, getGlobalRunner } from 'styxdefs';

const MIDTRANS_METADATA: Metadata = {
    id: "babec355b9aad047b73e8a1f93635d602749ced4.boutiques",
    name: "midtrans",
    package: "fsl",
    container_image_tag: "brainlife/fsl:6.0.4-patched2",
};


interface MidtransParameters {
    "__STYXTYPE__": "midtrans";
    "transforms": Array<InputPathType>;
    "output_matrix"?: string | null | undefined;
    "template_image"?: InputPathType | null | undefined;
    "separate_basename"?: string | null | undefined;
    "debug_flag": boolean;
    "verbose_flag": boolean;
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
        "midtrans": midtrans_cargs,
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
 * Output object returned when calling `midtrans(...)`.
 *
 * @interface
 */
interface MidtransOutputs {
    /**
     * Output root folder. This is the root folder for all outputs.
     */
    root: OutputPathType;
}


function midtrans_params(
    transforms: Array<InputPathType>,
    output_matrix: string | null = null,
    template_image: InputPathType | null = null,
    separate_basename: string | null = null,
    debug_flag: boolean = false,
    verbose_flag: boolean = false,
): MidtransParameters {
    /**
     * Build parameters.
    
     * @param transforms List of input transform files (e.g. transform1.mat transform2.mat ... transformN.mat)
     * @param output_matrix Output filename for the resulting matrix
     * @param template_image Input filename for template image (needed for fix origin)
     * @param separate_basename Basename for the output of separate matrices (final name includes a number; e.g. img2mid0001.mat)
     * @param debug_flag Switch on debugging output
     * @param verbose_flag Switch on diagnostic messages
    
     * @returns Parameter dictionary
     */
    const params = {
        "__STYXTYPE__": "midtrans" as const,
        "transforms": transforms,
        "debug_flag": debug_flag,
        "verbose_flag": verbose_flag,
    };
    if (output_matrix !== null) {
        params["output_matrix"] = output_matrix;
    }
    if (template_image !== null) {
        params["template_image"] = template_image;
    }
    if (separate_basename !== null) {
        params["separate_basename"] = separate_basename;
    }
    return params;
}


function midtrans_cargs(
    params: MidtransParameters,
    execution: Execution,
): string[] {
    /**
     * Build command-line arguments from parameters.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Command-line arguments.
     */
    const cargs: string[] = [];
    cargs.push("midtrans");
    cargs.push(...(params["transforms"] ?? null).map(f => execution.inputFile(f)));
    if ((params["output_matrix"] ?? null) !== null) {
        cargs.push(
            "-o",
            (params["output_matrix"] ?? null)
        );
    }
    if ((params["template_image"] ?? null) !== null) {
        cargs.push(
            "--template",
            execution.inputFile((params["template_image"] ?? null))
        );
    }
    if ((params["separate_basename"] ?? null) !== null) {
        cargs.push(
            "--separate",
            (params["separate_basename"] ?? null)
        );
    }
    if ((params["debug_flag"] ?? null)) {
        cargs.push("--debug");
    }
    if ((params["verbose_flag"] ?? null)) {
        cargs.push("-v, --verbose");
    }
    return cargs;
}


function midtrans_outputs(
    params: MidtransParameters,
    execution: Execution,
): MidtransOutputs {
    /**
     * Build outputs object containing output file paths and possibly stdout/stderr.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Outputs object.
     */
    const ret: MidtransOutputs = {
        root: execution.outputFile("."),
    };
    return ret;
}


function midtrans_execute(
    params: MidtransParameters,
    execution: Execution,
): MidtransOutputs {
    /**
     * Calculate the midpoint transform from a series of input transforms.
     * 
     * Author: FMRIB Analysis Group, University of Oxford
     * 
     * URL: https://fsl.fmrib.ox.ac.uk/fsl/fslwiki
    
     * @param params The parameters.
     * @param execution The execution object.
    
     * @returns NamedTuple of outputs (described in `MidtransOutputs`).
     */
    params = execution.params(params)
    const cargs = midtrans_cargs(params, execution)
    const ret = midtrans_outputs(params, execution)
    execution.run(cargs, undefined);
    return ret;
}


function midtrans(
    transforms: Array<InputPathType>,
    output_matrix: string | null = null,
    template_image: InputPathType | null = null,
    separate_basename: string | null = null,
    debug_flag: boolean = false,
    verbose_flag: boolean = false,
    runner: Runner | null = null,
): MidtransOutputs {
    /**
     * Calculate the midpoint transform from a series of input transforms.
     * 
     * Author: FMRIB Analysis Group, University of Oxford
     * 
     * URL: https://fsl.fmrib.ox.ac.uk/fsl/fslwiki
    
     * @param transforms List of input transform files (e.g. transform1.mat transform2.mat ... transformN.mat)
     * @param output_matrix Output filename for the resulting matrix
     * @param template_image Input filename for template image (needed for fix origin)
     * @param separate_basename Basename for the output of separate matrices (final name includes a number; e.g. img2mid0001.mat)
     * @param debug_flag Switch on debugging output
     * @param verbose_flag Switch on diagnostic messages
     * @param runner Command runner
    
     * @returns NamedTuple of outputs (described in `MidtransOutputs`).
     */
    runner = runner || getGlobalRunner();
    const execution = runner.startExecution(MIDTRANS_METADATA);
    const params = midtrans_params(transforms, output_matrix, template_image, separate_basename, debug_flag, verbose_flag)
    return midtrans_execute(params, execution);
}


export {
      MIDTRANS_METADATA,
      MidtransOutputs,
      MidtransParameters,
      midtrans,
      midtrans_params,
};
