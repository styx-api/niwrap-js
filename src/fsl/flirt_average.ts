// This file was auto generated by Styx.
// Do not edit this file directly.

import { Runner, Execution, Metadata, InputPathType, OutputPathType, getGlobalRunner } from 'styxdefs';

const FLIRT_AVERAGE_METADATA: Metadata = {
    id: "283b294e9e7b11a5721209bbc9adac0d32930cd8.boutiques",
    name: "flirt_average",
    package: "fsl",
    container_image_tag: "brainlife/fsl:6.0.4-patched2",
};


interface FlirtAverageParameters {
    "__STYXTYPE__": "flirt_average";
    "ninputs": number;
    "input1": InputPathType;
    "input2": InputPathType;
    "input3"?: InputPathType | null | undefined;
    "output_file": string;
    "reference_image"?: InputPathType | null | undefined;
    "flirt_options"?: string | null | undefined;
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
        "flirt_average": flirt_average_cargs,
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
        "flirt_average": flirt_average_outputs,
    };
    return outputsFuncs[t];
}


/**
 * Output object returned when calling `flirt_average(...)`.
 *
 * @interface
 */
interface FlirtAverageOutputs {
    /**
     * Output root folder. This is the root folder for all outputs.
     */
    root: OutputPathType;
    /**
     * Averaged output image
     */
    outfile: OutputPathType;
}


function flirt_average_params(
    ninputs: number,
    input1: InputPathType,
    input2: InputPathType,
    output_file: string,
    input3: InputPathType | null = null,
    reference_image: InputPathType | null = null,
    flirt_options: string | null = null,
): FlirtAverageParameters {
    /**
     * Build parameters.
    
     * @param ninputs Number of input images
     * @param input1 First input image (e.g. rawT1_1.nii.gz)
     * @param input2 Second input image (e.g. rawT1_2.nii.gz)
     * @param output_file Output image (e.g. averageT1.nii.gz)
     * @param input3 Third input image (e.g. rawT1_3.nii.gz)
     * @param reference_image Reference image to use instead of first input
     * @param flirt_options Options to be passed to FLIRT
    
     * @returns Parameter dictionary
     */
    const params = {
        "__STYXTYPE__": "flirt_average" as const,
        "ninputs": ninputs,
        "input1": input1,
        "input2": input2,
        "output_file": output_file,
    };
    if (input3 !== null) {
        params["input3"] = input3;
    }
    if (reference_image !== null) {
        params["reference_image"] = reference_image;
    }
    if (flirt_options !== null) {
        params["flirt_options"] = flirt_options;
    }
    return params;
}


function flirt_average_cargs(
    params: FlirtAverageParameters,
    execution: Execution,
): string[] {
    /**
     * Build command-line arguments from parameters.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Command-line arguments.
     */
    const cargs: string[] = [];
    cargs.push("flirt_average");
    cargs.push(String((params["ninputs"] ?? null)));
    cargs.push(execution.inputFile((params["input1"] ?? null)));
    cargs.push(execution.inputFile((params["input2"] ?? null)));
    if ((params["input3"] ?? null) !== null) {
        cargs.push(execution.inputFile((params["input3"] ?? null)));
    }
    cargs.push((params["output_file"] ?? null));
    if ((params["reference_image"] ?? null) !== null) {
        cargs.push(
            "-FAref",
            execution.inputFile((params["reference_image"] ?? null))
        );
    }
    if ((params["flirt_options"] ?? null) !== null) {
        cargs.push((params["flirt_options"] ?? null));
    }
    return cargs;
}


function flirt_average_outputs(
    params: FlirtAverageParameters,
    execution: Execution,
): FlirtAverageOutputs {
    /**
     * Build outputs object containing output file paths and possibly stdout/stderr.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Outputs object.
     */
    const ret: FlirtAverageOutputs = {
        root: execution.outputFile("."),
        outfile: execution.outputFile([(params["output_file"] ?? null), ".nii.gz"].join('')),
    };
    return ret;
}


function flirt_average_execute(
    params: FlirtAverageParameters,
    execution: Execution,
): FlirtAverageOutputs {
    /**
     * Averages multiple input images after linear registration (FLIRT).
     * 
     * Author: FMRIB Analysis Group, University of Oxford
     * 
     * URL: https://fsl.fmrib.ox.ac.uk/fsl/fslwiki
    
     * @param params The parameters.
     * @param execution The execution object.
    
     * @returns NamedTuple of outputs (described in `FlirtAverageOutputs`).
     */
    params = execution.params(params)
    const cargs = flirt_average_cargs(params, execution)
    const ret = flirt_average_outputs(params, execution)
    execution.run(cargs, undefined);
    return ret;
}


function flirt_average(
    ninputs: number,
    input1: InputPathType,
    input2: InputPathType,
    output_file: string,
    input3: InputPathType | null = null,
    reference_image: InputPathType | null = null,
    flirt_options: string | null = null,
    runner: Runner | null = null,
): FlirtAverageOutputs {
    /**
     * Averages multiple input images after linear registration (FLIRT).
     * 
     * Author: FMRIB Analysis Group, University of Oxford
     * 
     * URL: https://fsl.fmrib.ox.ac.uk/fsl/fslwiki
    
     * @param ninputs Number of input images
     * @param input1 First input image (e.g. rawT1_1.nii.gz)
     * @param input2 Second input image (e.g. rawT1_2.nii.gz)
     * @param output_file Output image (e.g. averageT1.nii.gz)
     * @param input3 Third input image (e.g. rawT1_3.nii.gz)
     * @param reference_image Reference image to use instead of first input
     * @param flirt_options Options to be passed to FLIRT
     * @param runner Command runner
    
     * @returns NamedTuple of outputs (described in `FlirtAverageOutputs`).
     */
    runner = runner || getGlobalRunner();
    const execution = runner.startExecution(FLIRT_AVERAGE_METADATA);
    const params = flirt_average_params(ninputs, input1, input2, output_file, input3, reference_image, flirt_options)
    return flirt_average_execute(params, execution);
}


export {
      FLIRT_AVERAGE_METADATA,
      FlirtAverageOutputs,
      FlirtAverageParameters,
      flirt_average,
      flirt_average_params,
};
