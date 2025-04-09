// This file was auto generated by Styx.
// Do not edit this file directly.

import { Runner, Execution, Metadata, InputPathType, OutputPathType, getGlobalRunner } from 'styxdefs';

const OCT_REGISTER_MOSAIC_METADATA: Metadata = {
    id: "2b546a9d749a673358ff3e012b68d84d7dcd2c19.boutiques",
    name: "oct_register_mosaic",
    package: "freesurfer",
    container_image_tag: "freesurfer/freesurfer:7.4.1",
};


interface OctRegisterMosaicParameters {
    "__STYXTYPE__": "oct_register_mosaic";
    "tiles_or_mosaic_list": Array<string>;
    "output_volume": string;
    "downsample"?: number | null | undefined;
    "weight_file"?: InputPathType | null | undefined;
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
        "oct_register_mosaic": oct_register_mosaic_cargs,
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
        "oct_register_mosaic": oct_register_mosaic_outputs,
    };
    return outputsFuncs[t];
}


/**
 * Output object returned when calling `oct_register_mosaic(...)`.
 *
 * @interface
 */
interface OctRegisterMosaicOutputs {
    /**
     * Output root folder. This is the root folder for all outputs.
     */
    root: OutputPathType;
    /**
     * The registered output volume
     */
    registered_output: OutputPathType;
}


function oct_register_mosaic_params(
    tiles_or_mosaic_list: Array<string>,
    output_volume: string,
    downsample: number | null = null,
    weight_file: InputPathType | null = null,
): OctRegisterMosaicParameters {
    /**
     * Build parameters.
    
     * @param tiles_or_mosaic_list OCT tile images to be registered or a file listing the mosaic tiles
     * @param output_volume Output registered volume
     * @param downsample Use Gaussian downsampling specified number of times
     * @param weight_file File with tile weights to use in tile averaging
    
     * @returns Parameter dictionary
     */
    const params = {
        "__STYXTYPE__": "oct_register_mosaic" as const,
        "tiles_or_mosaic_list": tiles_or_mosaic_list,
        "output_volume": output_volume,
    };
    if (downsample !== null) {
        params["downsample"] = downsample;
    }
    if (weight_file !== null) {
        params["weight_file"] = weight_file;
    }
    return params;
}


function oct_register_mosaic_cargs(
    params: OctRegisterMosaicParameters,
    execution: Execution,
): string[] {
    /**
     * Build command-line arguments from parameters.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Command-line arguments.
     */
    const cargs: string[] = [];
    cargs.push("oct_register_mosaic");
    cargs.push(...(params["tiles_or_mosaic_list"] ?? null));
    cargs.push((params["output_volume"] ?? null));
    if ((params["downsample"] ?? null) !== null) {
        cargs.push(
            "-D",
            String((params["downsample"] ?? null))
        );
    }
    if ((params["weight_file"] ?? null) !== null) {
        cargs.push(
            "-W",
            execution.inputFile((params["weight_file"] ?? null))
        );
    }
    return cargs;
}


function oct_register_mosaic_outputs(
    params: OctRegisterMosaicParameters,
    execution: Execution,
): OctRegisterMosaicOutputs {
    /**
     * Build outputs object containing output file paths and possibly stdout/stderr.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Outputs object.
     */
    const ret: OctRegisterMosaicOutputs = {
        root: execution.outputFile("."),
        registered_output: execution.outputFile([(params["output_volume"] ?? null)].join('')),
    };
    return ret;
}


function oct_register_mosaic_execute(
    params: OctRegisterMosaicParameters,
    execution: Execution,
): OctRegisterMosaicOutputs {
    /**
     * Tool for registering multiple OCT (Optical Coherence Tomography) tiles or a mosaic list into a single output volume.
     * 
     * Author: FreeSurfer Developers
     * 
     * URL: https://github.com/freesurfer/freesurfer
    
     * @param params The parameters.
     * @param execution The execution object.
    
     * @returns NamedTuple of outputs (described in `OctRegisterMosaicOutputs`).
     */
    params = execution.params(params)
    const cargs = oct_register_mosaic_cargs(params, execution)
    const ret = oct_register_mosaic_outputs(params, execution)
    execution.run(cargs, undefined);
    return ret;
}


function oct_register_mosaic(
    tiles_or_mosaic_list: Array<string>,
    output_volume: string,
    downsample: number | null = null,
    weight_file: InputPathType | null = null,
    runner: Runner | null = null,
): OctRegisterMosaicOutputs {
    /**
     * Tool for registering multiple OCT (Optical Coherence Tomography) tiles or a mosaic list into a single output volume.
     * 
     * Author: FreeSurfer Developers
     * 
     * URL: https://github.com/freesurfer/freesurfer
    
     * @param tiles_or_mosaic_list OCT tile images to be registered or a file listing the mosaic tiles
     * @param output_volume Output registered volume
     * @param downsample Use Gaussian downsampling specified number of times
     * @param weight_file File with tile weights to use in tile averaging
     * @param runner Command runner
    
     * @returns NamedTuple of outputs (described in `OctRegisterMosaicOutputs`).
     */
    runner = runner || getGlobalRunner();
    const execution = runner.startExecution(OCT_REGISTER_MOSAIC_METADATA);
    const params = oct_register_mosaic_params(tiles_or_mosaic_list, output_volume, downsample, weight_file)
    return oct_register_mosaic_execute(params, execution);
}


export {
      OCT_REGISTER_MOSAIC_METADATA,
      OctRegisterMosaicOutputs,
      OctRegisterMosaicParameters,
      oct_register_mosaic,
      oct_register_mosaic_params,
};
