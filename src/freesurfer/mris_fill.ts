// This file was auto generated by Styx.
// Do not edit this file directly.

import { Runner, Execution, Metadata, InputPathType, OutputPathType, getGlobalRunner } from 'styxdefs';

const MRIS_FILL_METADATA: Metadata = {
    id: "c5656563cf43beb0f218120cdf33a3244a656aa3.boutiques",
    name: "mris_fill",
    package: "freesurfer",
    container_image_tag: "freesurfer/freesurfer:7.4.1",
};


interface MrisFillParameters {
    "__STYXTYPE__": "mris_fill";
    "resolution"?: number | null | undefined;
    "conform": boolean;
    "input_surface": InputPathType;
    "output_volume": string;
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
        "mris_fill": mris_fill_cargs,
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
        "mris_fill": mris_fill_outputs,
    };
    return outputsFuncs[t];
}


/**
 * Output object returned when calling `mris_fill(...)`.
 *
 * @interface
 */
interface MrisFillOutputs {
    /**
     * Output root folder. This is the root folder for all outputs.
     */
    root: OutputPathType;
    /**
     * The resulting filled volume output.
     */
    filled_volume: OutputPathType;
}


function mris_fill_params(
    input_surface: InputPathType,
    output_volume: string,
    resolution: number | null = null,
    conform: boolean = false,
): MrisFillParameters {
    /**
     * Build parameters.
    
     * @param input_surface Input surface file
     * @param output_volume Output volume file
     * @param resolution Set the resolution of the output volume (default = 0.250 mm/voxel)
     * @param conform Conform the volume before writing
    
     * @returns Parameter dictionary
     */
    const params = {
        "__STYXTYPE__": "mris_fill" as const,
        "conform": conform,
        "input_surface": input_surface,
        "output_volume": output_volume,
    };
    if (resolution !== null) {
        params["resolution"] = resolution;
    }
    return params;
}


function mris_fill_cargs(
    params: MrisFillParameters,
    execution: Execution,
): string[] {
    /**
     * Build command-line arguments from parameters.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Command-line arguments.
     */
    const cargs: string[] = [];
    cargs.push("mris_fill");
    if ((params["resolution"] ?? null) !== null) {
        cargs.push(
            "-r",
            String((params["resolution"] ?? null))
        );
    }
    if ((params["conform"] ?? null)) {
        cargs.push("-c");
    }
    cargs.push(execution.inputFile((params["input_surface"] ?? null)));
    cargs.push((params["output_volume"] ?? null));
    return cargs;
}


function mris_fill_outputs(
    params: MrisFillParameters,
    execution: Execution,
): MrisFillOutputs {
    /**
     * Build outputs object containing output file paths and possibly stdout/stderr.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Outputs object.
     */
    const ret: MrisFillOutputs = {
        root: execution.outputFile("."),
        filled_volume: execution.outputFile([(params["output_volume"] ?? null)].join('')),
    };
    return ret;
}


function mris_fill_execute(
    params: MrisFillParameters,
    execution: Execution,
): MrisFillOutputs {
    /**
     * A tool that floodfills the interior of a surface and writes the results into a volume of specified resolution.
     * 
     * Author: FreeSurfer Developers
     * 
     * URL: https://github.com/freesurfer/freesurfer
    
     * @param params The parameters.
     * @param execution The execution object.
    
     * @returns NamedTuple of outputs (described in `MrisFillOutputs`).
     */
    params = execution.params(params)
    const cargs = mris_fill_cargs(params, execution)
    const ret = mris_fill_outputs(params, execution)
    execution.run(cargs, undefined);
    return ret;
}


function mris_fill(
    input_surface: InputPathType,
    output_volume: string,
    resolution: number | null = null,
    conform: boolean = false,
    runner: Runner | null = null,
): MrisFillOutputs {
    /**
     * A tool that floodfills the interior of a surface and writes the results into a volume of specified resolution.
     * 
     * Author: FreeSurfer Developers
     * 
     * URL: https://github.com/freesurfer/freesurfer
    
     * @param input_surface Input surface file
     * @param output_volume Output volume file
     * @param resolution Set the resolution of the output volume (default = 0.250 mm/voxel)
     * @param conform Conform the volume before writing
     * @param runner Command runner
    
     * @returns NamedTuple of outputs (described in `MrisFillOutputs`).
     */
    runner = runner || getGlobalRunner();
    const execution = runner.startExecution(MRIS_FILL_METADATA);
    const params = mris_fill_params(input_surface, output_volume, resolution, conform)
    return mris_fill_execute(params, execution);
}


export {
      MRIS_FILL_METADATA,
      MrisFillOutputs,
      MrisFillParameters,
      mris_fill,
      mris_fill_params,
};
